import React from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate
// } from "react-router-dom";
import './App.css';
import { LoginProvider } from './components/Context/LoginContext';
import MainLayout from './components/MainLayout';


const App = () => {
  return(
    <LoginProvider>
      <MainLayout/>
    </LoginProvider>
  )
}

export default App;
