import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import firebase from 'firebase/app';
import 'firebase/auth';
import App from './App';

// Initialize Firebase with your project credentials
const firebaseConfig = {
  apiKey: "AIzaSyB2LiKxIEMBeRNuYgMAktVkk0ubjWOcEj4",
  authDomain: "newauth-5b8d2.firebaseapp.com",
  databaseURL: "https://newauth-5b8d2-default-rtdb.firebaseio.com",
  projectId: "newauth-5b8d2",
  storageBucket: "newauth-5b8d2.appspot.com",
  messagingSenderId: "206185928024",
  appId: "1:206185928024:web:63f3657cac376b0b70812d"
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

