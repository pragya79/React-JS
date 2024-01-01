import React from 'react'
import {auth,provider} from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import '../App.css'

function Login({setIsAuth}) {
  const navigate=useNavigate();
  const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
      localStorage.setItem("isAuth",true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className='loginPage'>
      <p>Sign In with Google to continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default Login
