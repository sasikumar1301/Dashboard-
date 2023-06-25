import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './index.css';

const SignupPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("")

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
        if ( !email ||  !password) {
            throw new Error('Please enter both email and password');
          }
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      history.push('/dashboard'); // Redirect to dashboard or any other page after successful signup
    } catch (error) {
      console.log(error);
      setError(error)
    }
  };

  return (
    <div className="signup-page">
      <h1>Signup Page</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>*password should be at least 6 characters</p>
      <button className='signUpbtn' onClick={handleSignup}>Create Account</button>
      <Link className="backbtn" to="/">Back to Login</Link>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignupPage;
