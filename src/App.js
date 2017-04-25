import React, { Component } from 'react';
import GoogleAuthentication from './components/GoogleAuth/GoogleAuth';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import SideNav from './components/SideNav/SideNav';
import Cohort from './components/Cohort/Cohort';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import './App.css';
import firebase from 'firebase';
import { connect } from 'react-redux';
class App extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
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
    const { userData, GoogleAuth } = this.props;
    console.log(GoogleAuth, 'GoogleAuth');
    return (
     <Router>
      <div>
       <SideNav/>
       <Route path='/Home' component={Home} />
       <Route path='/Login' component={GoogleAuthentication} />
       <Route path='/' render={() => ( GoogleAuth ? (<Redirect to="/Home" />): (<Redirect to="/Login" />))} />
       <Route path='/Cohort' component={Cohort}/>
       <Route path='/Profile' component={Profile}/>
      </div>
     </Router>
    );
  }
}
const mapStateToProps = ({ GoogleAuth }) => {
  return {
    GoogleAuth
  }
}
export default connect(mapStateToProps)(App);
