import React, {Component} from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../actions'
import { Redirect} from 'react-router-dom';

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ login }, dispatch)
// }
function mapStateToProps({ userData }) {
  return {
    userData
  }
}

class GoogleAuthentication extends Component {
    render() {
      const { userData } = this.props;
      console.log('this.props in auth', userData.loggedIn, 'loggedIn or nah???');
      if (userData.loggedIn) {
        return (<Redirect to='/Home'/>);
      }
      return (
        <div>
          <h2>SIGN IN WITH GOOGLE</h2>
          <button onClick={this.props.login}>GOOGLE</button>
        </div>
      )
    }
}
export default connect(mapStateToProps , { login })(GoogleAuthentication);
