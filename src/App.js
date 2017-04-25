import React, { Component } from 'react';
import GoogleAuth from './components/GoogleAuth/GoogleAuth';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SideNav from './components/SideNav/SideNav';
import Cohort from './components/Cohort/Cohort';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
const firebase = require('firebase');
import './App.css';

import LogInForm from './components/logIn';

class App extends Component {
  constructor(){
    super()
  }
  componentWillMount(){
   console.log('componentWillMount');
    let config = {
        apiKey: "AIzaSyBcZY-ngAyYe9-gw5z_A0_k6so4BPsJ8V0",
        authDomain: "galvanize-connect-cfd11.firebaseapp.com",
        databaseURL: "https://galvanize-connect-cfd11.firebaseio.com",
        projectId: "galvanize-connect-cfd11",
        storageBucket: "galvanize-connect-cfd11.appspot.com",
        messagingSenderId: "836129324682"
    }
    firebase.initializeApp(config)
  }
  render() {
    return (
    <div class="ui five item menu">
      {/* <div>
      <LogInForm / >
      </div> */}
     <Router class="ui five item menu">
      <div>
       <SideNav/>
       <Route  class="item" path='/Home' component={Home}/>
       <Route class="item" path='/sign-in' component={GoogleAuth}/>
       <Route class="item" path='/Cohort' component={Cohort}/>
       <Route class="item" path='/Profile' component={Profile}/>
      </div>
     </Router>
    </div>
    );
  }
}
{/* <div class="ui five item menu">
      <a class="item" [routerLink]="['/home']">Home</a>
      <a class="item" [routerLink]="['/login']">LogIn</a>
      <a class="item" [routerLink]="['/register']">Register</a>
      <a class="item" [routerLink]="['/mainsearch']">Search Ingredients</a>
      <a class="item" [routerLink]="['/talkapi']">HTTP-Example</a>
    </div> */}

export default App;
