import React, { Component } from 'react';
import firebase from 'firebase';
import { logout } from './actions'
import GoogleAuthentication from './views/Login';
import { BrowserRouter as Router, Route, Redirect, Link, Icon } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Menu, Segment } from 'semantic-ui-react'
import Cohort from './views/Cohort';
import Profile from './views/Profile';
import Home from './views/Home';
import About from './views/About';
import Logout from './views/Logout'
import { connect } from 'react-redux';
import './App.css';

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home' }
  }


  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBcZY-ngAyYe9-gw5z_A0_k6so4BPsJ8V0',
      authDomain: 'galvanize-connect-cfd11.firebaseapp.com',
      databaseURL: 'https://galvanize-connect-cfd11.firebaseio.com',
      projectId: 'galvanize-connect-cfd11',
      storageBucket: 'galvanize-connect-cfd11.appspot.com',
      messagingSenderId: '836129324682',
    };
    firebase.initializeApp(config);
  }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name });


  render() {
    const { name } = this.props.userData;
    const { activeItem } = this.state;

    return (
      <div id='header'>
        <Menu pointing secondary color='blue' stackable={true}>
            <Link to='/Home'>
              <Menu.Item name='Home' to="/Home" active={activeItem === 'Home'} onClick={this.handleItemClick} />
            </Link>
            {/* <Link to="/Cohort">
              <Menu.Item name='cohort' to='/Cohort' active={activeItem === 'cohort'} onClick={this.handleItemClick} />
            </Link> */}
            <Link to='/Profile'>
              <Menu.Item name='Profile' active={activeItem === 'Profile'} onClick={this.handleItemClick}/>
            </Link>
            {/* <Link to="/About">
              <Menu.Item name='About' active={activeItem === '/About'} onClick={this.handleItemClick}/>
            </Link> */}

            <Menu.Menu position='right'>

            {!this.props.userData.name && <Link to='/login'>
              <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}/>
            </Link>}
           { this.props.userData.name && <Link to='/Logout'>
              <Menu.Item name='Logout' active={activeItem === 'Logout'} onClick={this.handleItemClick}/>
            </Link>}
           </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default connect(({ userData }) => ({ userData }), ({ logout }))(App);
