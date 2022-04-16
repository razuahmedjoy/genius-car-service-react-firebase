import React from 'react';
import googleLogo from '../../../../images/google.png'
import fbLogo from '../../../../images/facebook.png'
import githubLogo from '../../../../images/github.png'
import { useAuthState, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub,user1,loading1,error1] = useSignInWithGithub(auth);
    

    let errorElement;
    const navigate = useNavigate()

    if(error || error1){
        errorElement = <div>
        <p className="text-danger">
            Error : {error?.message} {error1?.message}
        </p>
    </div>
            
        
    }
    

    if(user || user1){
        navigate('/home')
    }

    return (
        <div className="my-3">
            <div className="d-flex align-items-center justify-content-center">
                <div style={{ height: '1px' }} className="bg-primary w-50"></div>
                <p className="pt-3 px-4">or</p>
                <div style={{ height: '1px' }} className="bg-primary w-50"></div>

            </div>

            {errorElement}
            <div className="text-center">
                <button onClick={()=>signInWithGoogle()} className="btn btn-outline-primary d-flex justify-content-center align-items-center w-50 mx-auto mb-2">
                    <img src={googleLogo} width="25" height="25" alt="" />
                    <span className="ms-3">Sign in with Google</span>
                </button>
                <button className="btn btn-outline-primary d-flex justify-content-center align-items-center w-50 mx-auto mb-2">
                    <img src={fbLogo} width="25" height="25" alt="" />
                    <span className="ms-3">Sign in with Facebook</span>
                </button>
                <button onClick={()=>signInWithGithub()} className="btn btn-outline-primary d-flex justify-content-center align-items-center w-50 mx-auto">
                    <img src={githubLogo} width="25" height="25" alt="" />
                    <span className="ms-3">Sign in with Github</span>
                </button>
             
            </div>
        </div>
    );
};

export default SocialLogin;