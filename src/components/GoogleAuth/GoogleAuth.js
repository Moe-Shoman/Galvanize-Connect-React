import React, {Component} from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../actions'
import { Redirect} from 'react-router-dom';

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ login }, dispatch)
// }
function mapStateToProps({userData, GoogleAuth}) {
  return {
    GoogleAuth
  }
}

class GoogleAuthentication extends Component {
    render() {
      console.log('this.props in auth', this.props);
      if (this.props.GoogleAuth) {
        // firebase.database().ref('users/'+nextMessage.id).set(nextMessage)
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
