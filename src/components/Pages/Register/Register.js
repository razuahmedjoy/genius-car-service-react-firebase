import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    const [updateProfile, updating, profileupdateerror] = useUpdateProfile(auth);

    const updateUserProfile = ()=>{

    }

    const [user2, loading2] = useAuthState(auth)

    // state for terms and condition agree checkbox
    const[agree,setAgree] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value
        const name = event.target.name.value
        const password1 = event.target.password1.value
        const password2 = event.target.password2.value

        console.log(email, name, password1, password2)
        if (password1.length < 6) {
            setError('PAssword must be at least 6 characters')
            return;
        }
        if (password1 !== password2) {
            setError('Both password field should be same');
            return;
        }
        

        await createUserWithEmailAndPassword(email, password1);
        await updateProfile({displayName: name});
        if(user){
            navigate('/home')
        }
        

    }

    if (loading2) {
        return;
    }

    if (user || user2) {
        navigate('/home')
    }

    return (
        <div>
            <h2 className="text-center text-primary my-4">
                Register Now
            </h2>
            <div className="form">


                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password1" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="password2" placeholder="Again Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className={agree ? 'text-primary' : 'text-danger'} onClick={()=>setAgree(!agree)} type="checkbox" label="Accept Terms and Condition ? " required />
                    </Form.Group>

                    <p className="text-danger">{error}</p>
                    <p>Already have an account? <Link className="text-decoration-none" to="/login">Login Now</Link> </p>
                    <Button className="d-block w-100" variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;