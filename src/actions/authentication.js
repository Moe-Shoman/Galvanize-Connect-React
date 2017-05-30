import firebase from 'firebase';
import axios from 'axios';


export const addNonExistingUsers = (userObject) => {
  const { displayName, email, photoURL, uid } = userObject;
  console.log('------------------- ', uid);
  // const userKey = firebase.database().ref('users').push().key;
  // const userID = firebase.auth().currentUser.uid;
  // localStorage.setItem('userKey', uid);
  // console.log('item in localStorage is ========= ', localStorage.getItem('userKey'));
  // const userInFireBase = firebase.database().ref(`users/${userKey}`);
  const userInFireBase = firebase.database().ref(`users/${uid}`);

  return userInFireBase.once('value').then((snapshot) => {
    if (!snapshot.exists()) {
      const newUser = {
        name: displayName,
        email,
        uid,
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
  console.log('item in localStorage is ========= ', localStorage.getItem('userKey'));
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  provider.addScope('https://www.googleapis.com/auth/plus.login');
  return firebase.auth().signInWithPopup(provider).then((res) => {
    const user = res.user;
    return addNonExistingUsers(user);
  }).catch(err => (err));
};

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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        res(addNonExistingUsers(user));
      }
    });
  }),
});
