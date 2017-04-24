import React, { Component } from 'react';
import GoogleAuth from './components/GoogleAuth/GoogleAuth';
// import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
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
    return (
      <div className="App">
        <h2>Galvanize-Connect 1</h2>
        <GoogleAuth />
      </div>
    );
  }
}

export default App;
