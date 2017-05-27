import firebase from 'firebase';
import axios from 'axios';


export const addNonExistingUsers = (userObject) => {
  const { displayName, email, photoURL } = userObject;
 // const userKey = firebase.database().ref('users').push().key;
  // const userInFireBase = firebase.database().ref(`users/${userKey}`);
  const userInFireBase = firebase.database().ref(`users/${displayName}`);
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
    // let token = res.credential.accessToken;
    // console.log('token is ============ ', token);
    const user = res.user;
    console.log(user, '====== user is ');
    return addNonExistingUsers(user);
  }).catch(err => (err));
};

export const destructUser = (user) => {
// console.log(user, `====== user is `);
  const userInfo = {
    name: user.displayName,
    email: user.email,
    photo: user.photoURL,
    linkedIn: null,
    gitHub: null,
    twitter: null,
    projects: '',
    skills: '',
  };
  return userInfo;
};

// action creator
export const login = () => ({
  type: 'LOGIN',
  payload: loginRequest(),
});

export const authenticate = payload => ({ type: 'AUTHENTICATE', payload });

export const addToReduxStore = user => ({ type: 'ADD_TO_STORE', payload: destructUser(user) });

export const checkForAuthenticatedUser = () => ({
  type: 'CHECK_FOR_AUTHENTICATED_USER',
  payload: new Promise((resolve, reject) => {

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
