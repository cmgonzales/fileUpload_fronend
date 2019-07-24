import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import images from './components/image'

import { BrowserRouter as Router, Route } from "react-router-dom";


ReactDOM.render((
   
   <Router>
    <Route exact path = "/" component = {App}></Route>
   <Route path = "/image" component = {images}></Route>

 </Router>
  
    ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWAjll

