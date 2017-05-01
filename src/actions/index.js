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
  let PostsInFireBase = firebase.database().ref("feed/posts").push();
  PostsInFireBase.set(postObject);
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


export const addInfoToPost = (userData, form) => {
  const postInfo = {
    post: form['object Object'].values.post,
    name: userData.name,
    time: new Date(),
    comments: [],
    photo: userData.photo
  }
  addPostToFireBase(postInfo);
  return postInfo;
}

function restructureFetchedFireBaseObjects(object) {
  let restructuredPosts = Object.values(object)
  return restructuredPosts;
}

function addProjectToFireBase(username, project) {
  let userProjectsInFireBase = firebase.database().ref(`users/${username}/projects`).push();
  userProjectsInFireBase.set(project)
}
function structuredProject(userData, form) {
  const allProjectValues = form['object Object'].values;
  const username = userData.name;
  addProjectToFireBase(username, allProjectValues);
  return allProjectValues;
}

//ACTION CREATORS
export const login = (props) => {
    return {type: 'LOGIN', payload: loginRequest()};
}

export const addProject = ( userData, form) => {
    return {type: 'ADD_PROJECT', payload: structuredProject(userData,form)};
}

export const addPost = (userData, form) => {
    return {type: 'ADD_POST', payload: structuredProject(userData, form)};
}


export const getJobs = () => {
    return {type: 'GET_JOBS', payload: getJobsRequest()};
}

export const fetchPosts = (posts) => {
  return {type: 'FETCH_POSTS', payload: restructureFetchedFireBaseObjects(posts)};
}

export const fetchProjects = (projects) => {
  return {type: 'FETCH_PROJECTS', payload: restructureFetchedFireBaseObjects(projects)};
}

export const addSkill = () => {
  return {type: 'Add_SKILL', payload: ""}
}
