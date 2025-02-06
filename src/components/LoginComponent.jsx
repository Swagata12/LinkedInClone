import React, { useState } from 'react'
import { LoginAPI, GoogleSignAPI } from '../api/AuthAPI'
import LinkedinLogo from "../assets/LinkedinLogo.png";
import "../Sass/LoginComponent.scss";
import GoogleButton from 'react-google-button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function LoginComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email,credentails.password);
      toast.success('Signed In to Linkedin!')
      navigate('/home');
    } catch (err) {
      console.log(err)
      toast.error('Please Check your email or password')
    }  
  };

  const googleSignIn = () => {
    let res =  GoogleSignAPI();
    navigate('/home');
  }
  return (
    <div className='login-wrapper'>
      <img src={LinkedinLogo} className='LinkedinLogo'/>
      <div className="inner-wrapper">
      <h1 className='Heading'>Sign In</h1>
      <p className="subHeading">Stay updated on your professional world</p>
      <div className="auth-inputs">
        <input 
        onChange={(event) => 
          setCredentials({...credentails, email: event.target.value})
        }
        className='common-input'
        placeholder='Enter your Email or Phone'
        type = "email"
        />
        <input 
        onChange={(event) => 
          setCredentials({...credentails, password: event.target.value})
        }
        className='common-input'
        placeholder='Enter your Password'
        type = "password"
        />
      </div>
      <button onClick={login} className='login-btn'>
        Sign in
      </button>
      </div>
      <div className="google-btn-container">
        <GoogleButton
        className="google-btn"
          onClick={googleSignIn}
         />

         <p className='go-to-signup'>New to LinkedIn? <span className='join-now' onClick={() => navigate('/register')}>Join now</span></p>
      </div>
      
    </div>
  );
};
