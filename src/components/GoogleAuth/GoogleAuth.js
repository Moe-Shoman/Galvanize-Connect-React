import React, {Component} from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { Redirect} from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import './GoogleAuth.css';
function mapStateToProps({ userData }) {
  return {
    userData
  }
}

class GoogleAuthentication extends Component {
    render() {
      const { userData, login } = this.props;
      if (userData.loggedIn) {
        return (<Redirect to='/Home'/>);
      }
      return (
        <div id='signIn'>
          <h2>SIGN IN WITH GOOGLE</h2>
          <Button onClick={login} color='google plus' size='massive'circular icon>
            <Icon name='google' size='huge' color='blue'/>
          </Button>
        </div>
      )
    }
}
export default connect(mapStateToProps , { login })(GoogleAuthentication);
