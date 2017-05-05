import React, { Component } from 'react';
import GoogleAuthentication from './components/GoogleAuth/GoogleAuth';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
// import SideNav from './components/SideNav/SideNav';
import Cohort from './components/Cohort/Cohort';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import './App.css';
import firebase from 'firebase';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

injectTapEventPlugin();
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
    const { loggedIn } = this.props.userData;
    return (
    <div>
     <Router class="ui five item menu">

      <div className="page">

       <div>
        <ul className='navbar-ul'>
          <li className='navbar-li'><Link to='/' >Login</Link></li>
          <li className='navbar-li'><Link to='/Home' >Home</Link></li>
          <li className='navbar-li'><Link to='/Cohort' >Cohort</Link></li>
          <li className='navbar-li'><Link to='/Profile' >Profile</Link></li>
        </ul>
       </div>



       <Route path='/Home' render={() => ( !loggedIn ? (<Redirect to="/Login" />): (<Home/>))}/>
       <Route path='/Login' component={GoogleAuthentication} />
       <Route exact path='/' render={() => ( loggedIn ? (<Redirect to="/Home" />): (<Redirect to="/Login" />))} />
       <Route path='/Cohort' render={() => ( !loggedIn ? (<Redirect to="/Login" />): (<Cohort/>))}/>
       <Route path='/Profile' render={() => ( !loggedIn ? (<Redirect to="/Login" />): (<Profile/>))}/>
      </div>
     </Router>
    </div>
    );
  }
}

const mapStateToProps = ({ userData }) => {
  return {
    userData
  }
}
export default connect(mapStateToProps)(App);
