import React, { useState,useEffect } from 'react';
import { initializeApp } from 'firebase/app';
// import { FaApple,FaGoogle } from '@fortawesome/free-solid-svg-icons';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import "./index.css"


// Replace with your actual Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIfXqQVDoM6NsZo4-cYYG-cu9KgJEp9_k",
  authDomain: "meta-verse-login-page.firebaseapp.com",
  projectId: "meta-verse-login-page",
  storageBucket: "meta-verse-login-page.appspot.com",
  messagingSenderId: "474864330032",
  appId: "1:474864330032:web:b0d146876b115c11e114f5",
  measurementId: "G-5Y9G68W761"
};

// Initialize Firebase app
initializeApp(firebaseConfig);

// Create a custom hook for the authentication state
export function useAuth() { // Renamed to `useAuth` for export
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, [auth]);

  return currentUser;
}

function LogInPage () {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate('/home'); // Redirect to home page on successful login
    } catch (error) {
      setError(error.message);
    }
  };
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(getAuth(), provider);
      navigate('/home'); // Redirect to home page on successful login
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAppleLogin = async () => {
    const provider = new OAuthProvider();
    try {
      await signInWithPopup(getAuth(), provider)
      navigate('/home');
       // Redirect to dashboard or any other page after successful login
    } catch (error) {
      
      setError(error.message);
    }
  };

  // const handleForgotPassword = async () => {
  //   try {
  //     await firebase.auth().sendPasswordResetEmail(email);
  //     console.log('Password reset email sent!');
  //     // You can show a success message to the user or redirect to a password reset confirmation page
  //   } catch (error) {
  //     console.log(error);
  //     setError(error.message);
  //   }
  // };


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
           
            <button onClick={handleGoogleSignIn} className="social-button google">
            {/* <FaGoogle fa-google/> */}
  
                <span>Sign in with Google</span>

            </button>
            <button onClick={handleAppleLogin} className="social-button apple">
                
                {/* <FaApple fa-apple/> */}
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
            {error && <p className="error-message">{error}</p>}
        </form>
            <p >
        Don't have an account? <a href="/signup">Create an account</a>
      </p>

    </div>
    </div>
    </div>
    </div>
       
    )
}
export default LogInPage