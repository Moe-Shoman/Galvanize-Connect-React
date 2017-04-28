//Helper functions
import firebase from 'firebase';
import axios from 'axios';
const addNonExistingUsers = (userObject) => {
    const {displayName, email, photoURL} = userObject;
    let userInFireBase = firebase.database().ref(`users/${displayName}`);
    userInFireBase.once("value").then((snapshot) => {
        if (!snapshot.exists()) {
            userInFireBase.set({name: displayName, email, profilePic: photoURL})
        }
    })
}

const addPostToFireBase = (postObject) => {
  let addPostsInFireBase = firebase.database().ref("feed/posts").push();
  addPostsInFireBase.set(postObject);
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

const getJobsRequest = () => {
    return axios.get('http://service.dice.com/api/rest/jobsearch/v1/simple.json?text=javascript&city=94102&pgcnt=20').then((res) => res.data.resultItemList)
}

// const postResult = (post) => {
//   const postObject = {
//    post: post.post,
//    time: new Date()
//   }
//   return postObject
// }


export const addInfoToPost = (...info) => {
  // console.log('adding info yo', info[0], info[1]['object Object'].values.post);
  const postInfo = {
    post: info[1]['object Object'].values.post,
    name:info[0].userData.displayName,
    time: new Date(),
    comments: [],
    photoURL:info[0].userData.photoURL
  }
  console.log('post info !!!!!', postInfo);
  return postInfo;
}



//ACTION CREATORS
export const login = (props) => {
    return {type: 'LOGIN', payload: loginRequest()}
}

export const addProject = (project) => {
    return {type: 'ADD_PROJECT', payload: project}
}

export const addPost = (GoogleAuth, form) => {
    // console.log('post is =====', post);
    return {type: 'ADD_POST', payload: addInfoToPost(GoogleAuth, form) }
}

export const getJobs = () => {
    console.log('getJobs action creator');
    return {type: 'GET_JOBS', payload: getJobsRequest()}
}
