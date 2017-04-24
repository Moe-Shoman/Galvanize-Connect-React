import React, { Component } from 'react';
import LogInForm from './logIn';

class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Galvanize-Connect 1</h2>
          <LogInForm/>
        </div>
      </div>
    );
  }
}

export default App;
