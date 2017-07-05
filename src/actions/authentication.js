import firebase from 'firebase';
import axios from 'axios';


export const addNonExistingUsers = (userObject) => {
  const { displayName, email, photoURL, uid } = userObject;
  const userInFireBase = firebase.database().ref(`users/${uid}`);

  return userInFireBase.once('value').then((snapshot) => {
    if (!snapshot.exists()) {
      const newUser = {
        name: displayName,
        email,
        uid,
        photo: photoURL,
      };
      userInFireBase.set(newUser);
      return newUser;
    }
    const registeredUser = snapshot.val();
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
    return addNonExistingUsers(user);
  }).catch(err => (err));
};

// export const logUserOut = () => firebase.auth().signOut();

// action creator
export const login = () => ({
  type: 'LOGIN',
  payload: loginRequest(),
});

export const authenticate = payload => ({ type: 'AUTHENTICATE', payload });

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

export const logout = () => ({
  type: 'LOGOUT',
  payload: null,

  // new Promise((res, rej) => {
  //   firebase.auth().signOut();
  // }),
});
