import React, {Component} from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { Redirect} from 'react-router-dom';

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
        <div>
          <h2>SIGN IN WITH GOOGLE</h2>
          <button onClick={login}>GOOGLE</button>
        </div>
      )
    }
}
export default connect(mapStateToProps , { login })(GoogleAuthentication);
