import React, { Component } from 'react';
import GoogleAuthentication from './Views/Login';
import { BrowserRouter as Router, Route, Redirect, Link, Icon } from 'react-router-dom';
import Cohort from './Views/Cohort';
import Profile from './Views/Profile';
import Home from './Views/Home';
import About from './Views/About';
import './App.css';
import firebase from 'firebase';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Menu, Segment } from 'semantic-ui-react'
// import {
//     Sidebar,
//     Button,
//     Menu,
//     Image,
//     Icon,
//     Header,
// } from 'semantic-ui-react';


injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
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

//********************************************************************
// import React, { Component } from 'react'
// import { Menu, Segment } from 'semantic-ui-react'

// export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { name } = this.props.userData;
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
            <Link to="/Home">
              <Menu.Item name='Home' to="/Home" active={activeItem === 'Home'} onClick={this.handleItemClick} />
            </Link>
            <Link to="/Cohort">
              <Menu.Item name='cohort' to='/Cohort' active={activeItem === 'cohort'} onClick={this.handleItemClick} />
            </Link>
            <Link to="/Profile">
              <Menu.Item name='Profile' active={activeItem === '/Profile'} onClick={this.handleItemClick}/>
            </Link>
            <Link to="/About">
              <Menu.Item name='About' active={activeItem === '/About'} onClick={this.handleItemClick}/>
            </Link>

              {/* </Link>
               <Link to="/login">
                 <Menu.Item name='login' active={activeItem === '/login'} onClick={this.handleItemClick}/>
             </Link> */}

            {/* <Link to ='/logout' position='right'> */}
              <Menu.Menu position='right'>
                <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
              </Menu.Menu>
            {/* </Link> */}
        </Menu>
        {/* <div>
          <h1>Can I put some content here</h1>
        </div> */}
      </div>
    )


  }
}
{/* <Menu.Item name="profile">
//             <Link to="/Profile">
//               <Icon name="user" size="medium" />
//               <h3> Profile </h3>
//             </Link>
//           </Menu.Item> */}



//   render() {
//     const { name } = this.props.userData;
//         // console.log(name, 'me mayne');
//
//
//     return (
//         <Sidebar as={Menu} animation="push" width="thin" visible icon="labeled" vertical inverted>
//
//           <Menu.Item name="home">
//             <Link to="/Home">
//               <Icon name="home" size="medium" />
//               <h3>
//                               Home
//                             </h3>
//             </Link>
//           </Menu.Item>
//           <Menu.Item name="cohort">
//             <Link to="/Cohort">
//               <Icon name="users" size="medium" />
//               <h3>
//                               Cohort
//                             </h3>
//             </Link>
//           </Menu.Item>
//           <Menu.Item name="profile">
//             <Link to="/Profile">
//               <Icon name="user" size="medium" />
//               <h3> Profile </h3>
//             </Link>
//           </Menu.Item>
//
//           <Menu.Item name="login">
//             <Link to="/Login">
//               <Icon name="sign in" size="medium" />
//               <h3>
//                               Login
//                             </h3>
//             </Link>
//           </Menu.Item>
//         </Sidebar>
//     );
//   }
//
// }

export default connect(({ userData }) => ({ userData }))(App);
