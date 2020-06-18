import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import EventPage from './pages/EventPage';
import rePage from './pages/rePage';
import Certification from './components/Certification';
import CertificationForm from './components/CertificationResult';

// import './App.css';

const App = () => {
  return (
    <>
      <Route component={MainPage} path="/" exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={EventPage} path="/event" />
      <Route component={rePage} path="/certification" />
      <Route exact path="/certification" component={Certification} /> 
      
    </>
  );
};
export default App;
