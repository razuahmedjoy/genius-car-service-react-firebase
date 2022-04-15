import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  
    const [error,setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value
        const name = event.target.name.value
        const password1 = event.target.password1.value
        const password2 = event.target.password2.value

        console.log(email,name,password1,password2)
        // if(password.length < 6){
        //     setError('Password should be at least 6 charecters long');
        //     return;
        // }
        // if(password !== confirmPassword) {
        //     setError('Both password and confirm password should be same');
        //     return;
        // }

    }

    return (
        <div>
            <h2 className="text-center text-primary my-4">
                Register Now
            </h2>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email"  placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  type="password" name="password1"  placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="password2"  placeholder="Again Password" required />
                </Form.Group>
                <p className="text-danger">{error}</p>
                <p>Already have an account? <Link className="text-decoration-none" to="/login">Login Now</Link> </p>
                <Button className="d-block w-100" variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;