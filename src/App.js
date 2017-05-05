import React, {Component} from 'react';
import GoogleAuthentication from './components/GoogleAuth/GoogleAuth';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
import SideNav from './components/SideNav/SideNav';
import Cohort from './components/Cohort/Cohort';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import './App.css';
import firebase from 'firebase';
import {connect} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {
    Sidebar,
    Segment,
    Button,
    Menu,
    Image,
    Icon,
    Header
} from 'semantic-ui-react';


injectTapEventPlugin();
class App extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
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
        const {loggedIn} = this.props.userData;
        return (
            <Router class="ui five item menu">
                <div>
                    <Sidebar as={Menu} animation='push' width='thin' visible={true} icon='labeled' vertical inverted>
                        <Menu.Item name='login'>
                            <Link to='/'>
                            <Icon name='sign in' size='huge'/>
                            <h3>
                              Login
                            </h3>
                            </Link>
                        </Menu.Item>
                        <Menu.Item name='home'>
                            <Link to='/Home'>
                            <Icon name='home' size='huge'/>
                            <h3>
                              Home
                            </h3>
                            </Link>
                        </Menu.Item>
                        <Menu.Item name='cohort'>
                            <Link to='/Cohort'>
                            <Icon name='users' size='huge'/>
                            <h3>
                              Cohort
                            </h3>
                            </Link>
                        </Menu.Item>
                        <Menu.Item name='profile'>
                            <Link to='/Profile'>
                            <Icon name='user' size='huge'/>
                                <h3>
                                  Profile
                                </h3>
                            </Link>
                        </Menu.Item>
                    </Sidebar>
                    <Route path='/Home' render={() => (!loggedIn
                        ? (<Redirect to="/Login"/>)
                        : (<Home/>))}/>
                    <Route path='/Login' component={GoogleAuthentication}/>
                    <Route exact path='/' render={() => (loggedIn
                        ? (<Redirect to="/Home"/>)
                        : (<Redirect to="/Login"/>))}/>
                    <Route path='/Cohort' render={() => (!loggedIn
                        ? (<Redirect to="/Login"/>)
                        : (<Cohort/>))}/>
                    <Route path='/Profile' render={() => (!loggedIn
                        ? (<Redirect to="/Login"/>)
                        : (<Profile/>))}/>
                </div>
            </Router>
        );
    }

}

const mapStateToProps = ({userData}) => {
    return {userData}
}
export default connect(mapStateToProps)(App);
