import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../../Views/Login'
import Home from '../../Views/Home'
import { Redirect, Route } from 'react-router';

export default function (ComposedComponent) {
 class Authentication extends Component {
  constructor(props) {
   super(props)
  }
  static contextTypes = {
   router: React.PropTypes.object,
  }
  // componentWillMount = () => {
  //   if(!this.props.authentication) {
  //    this.redirect();
  //   }
  // }
  // componentWillUpdate = () => {
  //  if(!this.props.authentication) {
  //   this.redirect();
  //  }
  // }

  redirect = () => {
   // const { name } = this.props.userData;
   this.context.router.history.push('/Login')
   // <Route exact path='Login' render={() => (!name
   //  (<Redirect to="/Login"/>)
   // )}/>
  }

  render() {
   if(!this.props.userData || !this.props.userData.name) {
    return <Redirect to="/Login" />;
   }

   return (
    <ComposedComponent { ...this.props } />
   )
  }
 }

return connect(({ authentication, userData }) => ({ authentication, userData }))(Authentication);
}
