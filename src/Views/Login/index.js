import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, authenticate, addToReduxStore, checkForAuthenticatedUser } from '../../actions/authentication';
import { Redirect } from 'react-router-dom';
import { Button, Sidebar, Segment } from 'semantic-ui-react';
import './GoogleAuth.css';
import logo from '../../assets/googleAssets/g-logo.png';
import googleB from '../../assets/googleAssets/google-logo.png';
import LearnMore from '../../components/Learn/LearnMore';
import firebase from 'firebase';


class GoogleAuthentication extends Component {
 static contextTypes = {
  router: React.PropTypes.object,
   }

 componentWillMount = () => {
  if (!this.props.userData || !this.props.userData.name) {
   this.props.checkForAuthenticatedUser();
  }
 }

 redirect = () => {
  this.context.router.history.push('/Home')
 }

  render() {
    const { userData } = this.props;
    if (userData && userData.name) {
      return (<Redirect to="/Home" />);
    }
    return (
      // <Sidebar.Pusher>
        // <Segment basic>
          // <div id="signIn">
            // <div>
              // <div>
                // <img src={logo} alt="" />
                // <h2 id="connectHeader">
                    // Connect
                // </h2>
              // </div>
            // </div>
            <div>
            <LearnMore />
            <h2>Sign In with Google</h2>

            <Button onClick={this.props.login} size="massive"circular icon>
              <img style={{ width: '50px', height: '50px' }} src={googleB} alt="" />

            </Button>
          </div>
        // </Segment>
      // </Sidebar.Pusher>
    );
  }
}

export default connect(({ userData }) => ({ userData }), { login, authenticate, addToReduxStore, checkForAuthenticatedUser })(GoogleAuthentication);
