import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Components/Static/Login';
import Signup from './Components/Static/Signup';
import Navbar from './Components/Static/Navbar';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar/>
      <Route exact path="/" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/App" component={App}/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
