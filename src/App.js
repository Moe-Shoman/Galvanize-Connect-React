import React, { Component } from 'react';
import GoogleAuth from './components/GoogleAuth/GoogleAuth';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SideNav from './components/SideNav/SideNav';
import Cohort from './components/Cohort/Cohort';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (
     <Router>
      <div>
       <SideNav/>
       <Route path='/Home' component={Home}/>
       <Route path='/sign-in' component={GoogleAuth}/>
       <Route path='/Cohort' component={Cohort}/>
       <Route path='/Profile' component={Profile}/>
      </div>
     </Router>
    );
  }
}

export default App;
