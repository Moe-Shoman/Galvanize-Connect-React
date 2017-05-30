import firebase from 'firebase';
import axios from 'axios';


export const addNonExistingUsers = (userObject) => {
  const { displayName, email, photoURL } = userObject;
  // const userKey = firebase.database().ref('users').push().key;
  const userID = firebase.auth().currentUser.uid;
  console.log('userId is ============ ', userID);
  localStorage.setItem('userKey', userID);
  console.log(localStorage.getItem('userKey'));

  // const userInFireBase = firebase.database().ref(`users/${userKey}`);
  const userInFireBase = firebase.database().ref(`users/${userID}`);

  return userInFireBase.once('value').then((snapshot) => {
    if (!snapshot.exists()) {
      const newUser = {
        name: displayName,
        email,
        photo: photoURL,
        linkedIn: null,
        gitHub: null,
        twitter: null,
        projects: '',
        skills: '',
      };
      userInFireBase.set(newUser);
      return newUser;
    }
    const registeredUser = snapshot.val();
    console.log('registeredUser ============== ', registeredUser);
    registeredUser.projects = Object.values(registeredUser.projects);
    registeredUser.skills = Object.values(registeredUser.skills);
    return registeredUser;
  });
};


export const loginRequest = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  provider.addScope('https://www.googleapis.com/auth/plus.login');
  return firebase.auth().signInWithPopup(provider).then((res) => {
    const user = res.user;
    console.log('user is ======== ', user);
    // let token = res.credential.accessToken;
    // localStorage.setItem('token', token);
    // localStorage.setItem('token', user.refreshToken);
    // console.log(localStorage.getItem('token'));
    return addNonExistingUsers(user);
  }).catch(err => (err));
};

// export const destructUser = (user) => {
// // console.log(user, `====== user is `);
// let userInfo ={
//   name: user.displayName,
//   email: user.email,
//   photo: user.photoURL,
//   linkedIn: null,
//   gitHub: null,
//   twitter: null,
//   projects: '',
//   skills: '',
// }
//  return userInfo;
// }

// action creator
export const login = () => ({
  type: 'LOGIN',
  payload: loginRequest(),
});

export const authenticate = payload => ({ type: 'AUTHENTICATE', payload });

// export const addToReduxStore = (user) => {
//   return {type: 'ADD_TO_STORE', payload: destructUser(user)}
// }

export const checkForAuthenticatedUser = () => ({
  type: 'CHECK_FOR_AUTHENTICATED_USER',
  payload: new Promise((res, rej) => {
  // console.log('item in localStorage is ========= ',localStorage.getItem('userKey'));
   // return firebase.auth().getRedirectResult().then((res) => {
   //   if(res.credintial) {
   //    let token = res.credintial.accessToken;
   //   }
   //   let user = res.user;
   // })
   //  .catch((err) => {
   //    throw err;
   //  })

   //  firebase.auth().onAuthStateChanged(user => {
   //  if(user) {
   //   resolve(user);
   //   // this.props.login()
   //   // this.props.authenticate(true)
   //   // this.redirect();
   //  }
   // });
  }),
});
