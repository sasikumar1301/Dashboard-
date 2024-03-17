import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import LogInPage from "./Components/LogInPage";
import SignupPage from "./Components/SignupPage";

import './App.css'


function App(){
  return(
    // <Dashboard/>
    // <h1>HEAD</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App