import React, { Component } from 'react';
import GoogleAuth from './components/GoogleAuth/GoogleAuth';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SideNav from './components/SideNav/SideNav';
import Cohort from './components/Cohort/Cohort';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
const firebase = require('firebase');
import './App.css';

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
