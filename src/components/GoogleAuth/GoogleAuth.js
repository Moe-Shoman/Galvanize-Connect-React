// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { login, authenticate } from '../../actions';
// import { Redirect } from 'react-router-dom';
// import { Button, Sidebar, Segment } from 'semantic-ui-react';
// import './GoogleAuth.css';
// import logo from '../../assets/googleAssets/g-logo.png';
// import googleB from '../../assets/googleAssets/google-logo.png';
// import firebase from 'firebase';
//
//
// class GoogleAuthentication extends Component {
//  static contextTypes = {
//   router: React.PropTypes.object,
//    }
//
//  componentWillMount = () => {
//   firebase.auth().onAuthStateChange(user => {
//    if(user) {
//     this.props.authenticate(true)
//     this.redirect();
//    }
//   })
//  }
//
//  redirect = () => {
//   this.context.router.history.push('/Home')
//  }
//
//   render() {
//     const { userData } = this.props;
//     if (userData.name) {
//       return (<Redirect to="/Home" />);
//     }
//     return (
//       <Sidebar.Pusher>
//         <Segment basic>
//           <div id="signIn">
//             <div>
//               <div>
//                 <img src={logo} alt="" />
//                 <h2 id="connectHeader">
//                     Connect
//                 </h2>
//               </div>
//             </div>
//             <h2>SIGN IN WITH GOOGLE</h2>
//             <Button onClick={this.props.login} size="massive"circular icon>
//               <img style={{ width: '50px', height: '50px' }} src={googleB} alt="" />
//
//             </Button>
//           </div>
//         </Segment>
//       </Sidebar.Pusher>
//     );
//   }
// }
// export default connect(({ userData }) => ({ userData }), { login, authenticate })(GoogleAuthentication);
