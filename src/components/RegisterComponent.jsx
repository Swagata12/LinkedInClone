import React, { useState } from 'react'
import {RegisterAPI, GoogleSignAPI } from '../api/AuthAPI'
import LinkedinLogo from "../assets/LinkedinLogo.png";
import "../Sass/LoginComponent.scss";
import GoogleButton from 'react-google-button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await RegisterAPI(credentails.email,credentails.password);
      toast.success('Account is Created!');
      navigate('/home');
    } catch (err) {
      console.log(err)
      toast.error('Account already Exist!')
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
      <h1 className='Heading'>Make the most of your professional life</h1>
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
        Agree & Join
      </button>
      </div>
      <div className="google-btn-container">
        <GoogleButton
        className="google-btn"
          onClick={googleSignIn}
         />

         <p className='go-to-signup'>Already on LinkedIn?  
            <span className='join-now' onClick={() => navigate('/')}>Sign in</span></p>
      </div>
      
    </div>
  );
};

