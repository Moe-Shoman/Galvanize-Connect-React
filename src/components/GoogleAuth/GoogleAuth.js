import React, {Component} from 'react';
import firebase from 'firebase';
let provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
export default class GoogleAuth extends Component {
  signIn = () =>{
    return firebase.auth().signInWithPopup(provider)
      .then((res) => {
        console.log('res', res);
      })
  }
    render() {
      return (
        <div>
          <h2>SIGN IN WITH GOOGLE</h2>
          <button onClick={this.signIn}>GOOGLE</button>
        </div>
      )
    }
}
