import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import firebase from 'firebase/app';
import 'firebase/auth';
import App from './App';

// Initialize Firebase with your project credentials
const firebaseConfig = {
  apiKey: "AIzaSyCMNQYKDNKOAv_6ihgG3TJ1Vfa_9q0IeN0",
  authDomain: "openinassignment.firebaseapp.com",
  projectId: "openinassignment",
  storageBucket: "openinassignment.appspot.com",
  messagingSenderId: "560855519688",
  appId: "1:560855519688:web:0dde1f5af6370d10a6b0fd"
};

firebase.initializeApp(firebaseConfig);


createRoot(document.getElementById('root')).render( // Use createRoot directly
  <Router>
    <App />
  </Router>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

