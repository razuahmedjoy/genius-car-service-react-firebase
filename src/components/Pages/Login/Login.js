import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')


    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value
        
        console.log(email, password)
    }

    return (
        <div>
            <h2 className="text-center text-primary my-4">
                Login Now
            </h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
             
                <p>Don't have any Account yet? <Link className="text-decoration-none" to="/register">Register Now</Link> </p>
                <Button className="d-block w-100" variant="primary" type="submit">
                    Login
                </Button>

            </Form>
        </div>
    );
};

export default Login;