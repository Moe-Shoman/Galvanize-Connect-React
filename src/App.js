import React, { Component } from 'react';
import GoogleAuth from './components/GoogleAuth/GoogleAuth';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
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
