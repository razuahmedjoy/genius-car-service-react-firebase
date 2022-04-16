import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';

// for toast message
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const location = useLocation()
    const from = location.state?.from?.pathname || '/home'
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, passwordResetEmailerror] =useSendPasswordResetEmail(auth);

    const handlePasswordReset = ()=>{
        const email = emailRef.current.value
        if(email){
            sendPasswordResetEmail(email);
            toast('Email sent to your Email address')
        }
        else{
            toast('You must input your email address')
        }
        

    }


    const [user2, loading2] = useAuthState(auth)

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value
        
        signInWithEmailAndPassword(email, password)
    }

    if(loading2){
        return <Loading />;
    }
    
    if(user || user2){
        navigate(from,{replace:true});
    }

    return (
        <div>
            <ToastContainer />
            <h2 className="text-center text-primary my-4">
                Login Now
            </h2>
            <div className="form">

           
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
             
                <p>Don't have any Account yet? <Link className="text-decoration-none" to="/register">Register Now</Link> </p>
                <p>Forgot your password? <Link onClick={handlePasswordReset} className="text-decoration-none" to="#">Click Here</Link> </p>
                {passwordResetEmailerror?.message}
                <Button className="d-block w-100" variant="primary" type="submit">
                    Login
                </Button>


            </Form>
            <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;