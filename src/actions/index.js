//Helper functions
import firebase from 'firebase';

const addNonExistingUsers = (userObject) => {
  const {displayName, email, photoURL} = userObject;
    let userInFireBase = firebase.database().ref(`users/${displayName}`);
    userInFireBase.once("value").then((snapshot) => {
        if (!snapshot.exists()) {
            userInFireBase.set({name: displayName, email, profilePic: photoURL})
        }
    })
}

const loginRequest = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    provider.addScope('https://www.googleapis.com/auth/plus.login')
    return firebase.auth().signInWithPopup(provider).then((res) => {
        const user = res.user;
        addNonExistingUsers(user);
        return user
    }).catch((err) => {
        console.error(err);
    })
}


const addNewMessage = () => {
 console.log('============== inside addNewMessage');
}

//ACTION CREATORS
export const login = (props) => {
    return {type: 'LOGIN', payload: loginRequest()}
}
export const addProject = (project) => {
  console.log('project', project);
  return {type: 'ADD_PROJECT', payload: project}
}


//add message
export const addMessage = (props) => new Promise((resolve, reject) => {
 return {type: 'ADD_MESSAGE', payload: addNewMessage()}
})
