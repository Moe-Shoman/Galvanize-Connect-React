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

     <Router class="ui five item menu">
      <div>
       <SideNav/>
       <Route  class="item" path='/Home' component={Home}/>
       <Route class="item" path='/sign-in' component={GoogleAuth}/>
       <Route class="item" path='/Cohort' component={Cohort}/>
       <Route exact class="item" path='/Profile' component={Profile}/>
      </div>
     </Router>
    </div>
    );
  }
}


export default App;
