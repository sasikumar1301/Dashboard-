import { Link } from 'react-router-dom'
import React from 'react';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./index.css"


function LogInPage () {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onchangeEmail = (event) => {
        setEmail(event.target.value);
      };
      const onchangePass = (event) => {
        setPassword(event.target.value);
      };

    return(
        
        <div className='mh-container1'>
        <div className='main-container1'>
            <h1>Board</h1>
            </div>
            <div className='login-f'>
        <div className='login-form'>
            <div className="form-container">
            <div className="logo-container">
                Welcome Back!
            </div>

        <div className="social-buttons">
           
            <button className="social-button facebook">
                 <i className="fab fa-google" ></i>
                <span>Sign in with Google</span>

            </button>
            <button className="social-button apple">
                <i className="fab fa-apple" ></i>
                <span>Sign in with Apple</span>
            </button>
        </div>
        <form className="form" >
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input required="" value={email} onChange={onchangeEmail} placeholder="Enter your email" name="email" id="email" type="email" />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input required="" value={password} name="password"  onChange={onchangePass} placeholder="Enter your password" id="password" type="password" />
            </div>

            <button type="submit" className="form-submit-btn"> <Link to="/"> Sign In </Link></button>
        </form>

        <a href="https://example.com" rel="noopener noreferrer" className="forgot-password-link link" >
            Forgot Password
            </a>

        <p className="signup-link">
            Don't have an account?
            <a href="https://example.com" rel="noopener noreferrer" className="signup-link link" > Sign up now</a>
        </p>
    </div>
    </div>
    </div>
    </div>
       
    )
}
export default LogInPage