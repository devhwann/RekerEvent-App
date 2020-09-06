import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import EventPage from './pages/EventPage';
import rePage from './pages/rePage';
import AuthFomr1 from './components/AuthFomr1';
import CertificationResult from './components/CertificationResult';
import AuthForm from './components/Auth/AuthForm';
import CommentPage from './pages/CommentPage';
// import './App.css';

const App = () => {
  return (
    <>
      <Route component={MainPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={EventPage} path="/event" />
      <Route component={rePage} path="/test" />
      <Route exact path="/AuthFomr1" component={AuthFomr1} /> 
      <Route exact path="/AuthForm" component={AuthForm} /> 
      <Route exact path="/certification/result" component={CertificationResult} />
      <Route component={CommentPage} path="/@:username/:commentId" />
    </>
  );
};
export default App;
