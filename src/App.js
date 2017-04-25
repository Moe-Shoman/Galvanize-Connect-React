import React, { Component } from 'react';
import GoogleAuth from './components/GoogleAuth/GoogleAuth';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SideNav from './components/SideNav/SideNav';
import Cohort from './components/Cohort/Cohort';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import logo from './logo.svg';
import './App.css';

import LogInForm from './components/logIn';

class App extends Component {
  constructor(){
    super()
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
