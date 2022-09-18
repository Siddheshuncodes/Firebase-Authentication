// import { sendPasswordResetEmail, confirmPasswordReset } from 'firebase/auth';
import { resetPassword } from '../context/UserAuthContext';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button, Alert } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import {Link, useNavigate} from "react-router-dom";
import { useUserAuth } from '../context/UserAuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try{
        await logIn(email, password);
        navigate("home");
        if(!password){
            await resetPassword();
            // if(sendPasswordResetEmail){
            //     (confirmPasswordReset);
            // }
        }
      }catch(err){
        setError(err.message);
      }
    };
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try{
            await googleSignIn();
            navigate('home');
        }catch(err){
            console.log(err.message)
        }
    };
    const divStyle = {
        fontSize: 11,
        paddingBottom: 11,
        textDecoration: 'none',
    }
  return (
    <>
        <div className='p-4 box'>
            <h2 className='mb-3'>Firebase Auth Login</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Control type='email' placeholder='Email address' 
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Control type='password' placeholder='Password' 
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                
                <div style={divStyle}><Link to=''>Forgot password?</Link></div>

                <div className='d-grid gap-2'>
                    <Button variant="primary" type='submit'>
                        Log In
                    </Button>
                </div>
                
            </Form>
            <hr />
            <div>
                <GoogleButton className='g-btn' type='dark' onClick={handleGoogleSignIn} />
            </div>
        </div>
        <div className='p-4 box mt-3 text-center'>
            Don't have an account? <Link to='signup'>Sign up</Link>
        </div>
    </>
  )
}

export default Login