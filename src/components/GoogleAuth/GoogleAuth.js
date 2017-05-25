import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { Redirect } from 'react-router-dom';
import { Button, Sidebar, Segment } from 'semantic-ui-react';
import './GoogleAuth.css';
import logo from './g-logo.png';
import googleB from './google-logo.png';


class GoogleAuthentication extends Component {
  render() {
    const { userData } = this.props;
    if (userData.name) {
      return (<Redirect to="/Home" />);
    }
    return (
      <Sidebar.Pusher>
        <Segment basic>
          <div id="signIn">
            <div>
              <div>
                <img src={logo} alt="" />
                <h2 id="connectHeader">
                    Connect
                </h2>
              </div>
            </div>
            <h2>SIGN IN WITH GOOGLE</h2>
            <Button onClick={this.props.login} size="massive"circular icon>
              <img style={{ width: '50px', height: '50px' }} src={googleB} alt="" />

            </Button>
          </div>
        </Segment>
      </Sidebar.Pusher>
    );
  }
}
export default connect(({ userData }) => ({ userData }), { login })(GoogleAuthentication);
