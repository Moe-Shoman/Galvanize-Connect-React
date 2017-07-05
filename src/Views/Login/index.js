import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, authenticate, addToReduxStore, checkForAuthenticatedUser } from '../../actions/authentication';
import { Redirect } from 'react-router-dom';
import { Button, Sidebar, Segment } from 'semantic-ui-react';
import logo from '../../assets/googleAssets/g-logo.png';
import googleB from '../../assets/googleAssets/google-logo.png';
import LearnMore from '../../components/Learn/LearnMore';
import firebase from 'firebase';
import './login.css';


class GoogleAuthentication extends Component {
 static contextTypes = {
  router: React.PropTypes.object,
   }

 componentWillMount = () => {
  if (!this.props.userData || !this.props.userData.name) {
   this.props.checkForAuthenticatedUser();
  }
 }

 // redirect = () => {
 //  this.context.router.history.push('/Home')
 // }

  render() {
    const { userData } = this.props;
    if (userData && userData.name) {
      return (<Redirect to="/Home" />);
    }
    return (
            <div>
            <LearnMore />
            <h2 className='signinheader' >Sign In with Google</h2>
            <Button id='loginbutton' onClick={this.props.login} size="massive"circular icon>
              <img style={{ width: '50px', height: '50px' }} src={googleB} alt="" />
            </Button>
          </div>

    );
  }
}

export default connect(({ userData }) => ({ userData }), { login, authenticate, addToReduxStore, checkForAuthenticatedUser })(GoogleAuthentication);
