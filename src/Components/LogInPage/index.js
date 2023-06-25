import React, { useState  } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FaGoogle, FaApple } from 'react-icons/fa';
import "./index.css"


function LogInPage () {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [e, setErr] = useState(false)
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        try {
          if ( !email ||  !password) {
            throw new Error('Please enter both email and password');
          }
    
          await firebase.auth().signInWithEmailAndPassword(email, password);
          history.push('/dashboard'); // Redirect to dashboard or any other page after successful login
        } catch (error) {
            setErr(true)
          console.error(error); // Log the error to the console
          setError(error.message); // Set the error message in the state
           
        }
      };
  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      history.push('/dashboard'); // Redirect to dashboard or any other page after successful login
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleAppleLogin = async () => {
    const provider = new firebase.auth.OAuthProvider('apple.com');
    try {
      await firebase.auth().signInWithPopup(provider);
      history.push('/dashboard'); // Redirect to dashboard or any other page after successful login
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      console.log('Password reset email sent!');
      // You can show a success message to the user or redirect to a password reset confirmation page
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };


    return(
        
        <div className='mh-container1'>
        <div className='main-container1'>
            <h1>Board.</h1>
            </div>
        <div className='login-f'>
        <div className='login-form'>
            <div className="form-container">
            
                <h1>Sign In </h1>
                <p>Sign In to your account</p>
            

        <div className="social-buttons">
           
            <button onClick={handleGoogleLogin} className="social-button google">
            <FaGoogle fa-google/>
  
                <span>Sign in with Google</span>

            </button>
            <button onClick={handleAppleLogin} className="social-button apple">
                
                <FaApple fa-apple/>
                <span>Sign in with Apple</span>
            </button>
        </div>
        <form className="form" >
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input name={email} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" type="email" />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input value={password} name="password"  onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" type="password" />
            </div>

            <button onClick={handleLogin} className="form-submit-btn"> Log In </button>
            {e && <p className="error-message">{error}</p>}
        </form>
        <button className='bottom-buttons' onClick={handleForgotPassword}>
            Forgot Password
            </button>
        <p className="signup-link">
            Don't have an account?
           <Link className="bottom-buttons b" to="/signup">Sign In</Link>
        </p>

    </div>
    </div>
    </div>
    </div>
       
    )
}
export default LogInPage