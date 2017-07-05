import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import { logout } from '../../actions';

class Logout extends Component {
  constructor(props) {
    super(props);
  }

  firebaseLogOut() {
   return firebase.auth().signOut();
  }

  componentWillMount = () => {
   if (this.props.userData || this.props.userData.name) {
    this.firebaseLogOut()
    this.props.logout();
   }
  }


  render() {
    const { userData, logout } = this.props;
    // if (!userData && !userData.name) {
    //   return (<Redirect to="/Login" />);
    // }
    return (
      <div>
      </div>
    );
  }

}


export default connect(({ userData }) => ({ userData }), ({ logout }))(Logout);
