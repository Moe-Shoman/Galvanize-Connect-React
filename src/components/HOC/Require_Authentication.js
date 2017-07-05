import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../../views/Login'
import Home from '../../views/Home'
import { Redirect, Route } from 'react-router';

export default function (ComposedComponent) {
 class Authentication extends Component {
  constructor(props) {
   super(props)
  }
  static contextTypes = {
   router: React.PropTypes.object,
  }

  redirect = () => {
   this.context.router.history.push('/Login')
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
