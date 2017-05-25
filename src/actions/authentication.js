import firebase from 'firebase';
import axios from 'axios';


export const addNonExistingUsers = (userObject) => {
  const { displayName, email, photoURL } = userObject;
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
