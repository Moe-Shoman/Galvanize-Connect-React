import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../../Views/Login'

export default function (ComposedComponent) {
 class Authentication extends Component {
  constructor(props) {
   super(props)
  }
  static contextTypes = {
   router: React.PropTypes.object,
  }
  componentWillMount = () => {
    if(!this.props.authentication) {
     this.redirect();
    }
  }
  componentWillUpdate = () => {
   if(!this.props.authentication) {
    this.redirect();
   }
  }

  redirect = () => {
   this.context.router.history.push('/Login')
  }

  render() {
   if(!this.props.authentication) {
    this.redirect();
   }

   return (
    <ComposedComponent { ...this.props } />
   )
  }
 }

return connect(({ authentication }) => ({ authentication }))(Authentication);
}
