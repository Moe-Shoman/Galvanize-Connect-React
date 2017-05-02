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
const loginRequest = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    provider.addScope('https://www.googleapis.com/auth/plus.login')
    return firebase.auth().signInWithPopup(provider).then((res) => {
      console.log('res');
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

const addPostToFireBase = (postObject, postKey) => {
  let PostsInFireBase = firebase.database().ref(`feed/posts/${postKey}`);
  PostsInFireBase.set(postObject);
}

export const addInfoToPost = (userData, input) => {
  let postKey = firebase.database().ref('feed').child('posts').push().key;
  const postInfo = {
    post: input,
    name: userData.name,
    photo: userData.photo,
    date: (new Date()).toString(),
    postKey
  }
  addPostToFireBase(postInfo, postKey);
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
function updateProjectsAndSendToDB(userData, project) {
  const username = userData.name;
  addProjectToFireBase(username, project);
  return project;
}
function updateSkillsAndSendToDB(userData, skill) {
  const userName = userData.name;
  addSkillToFireBase(userName, skill);
  return skill;
}

function addSkillToFireBase(userName, skill){
  let userSkillsInFireBase = firebase.database().ref(`users/${userName}/skills`).push();
  userSkillsInFireBase.set(skill)
}

export const addReplyToPost = (userData, comment) => {
 // console.log ('================================, ', comment['object Object']);
 console.log ('================================, ', comment);
 const commentInfo = {
  comment: comment,
  name: userData.name,
  time: new Date(),
  photo: userData.photo
 }
 addCommentToFB(commentInfo);
 return commentInfo;
}

const addCommentToFB = (commentObj) => {
   let newPostKey = firebase.database().ref().child('posts').push().key;
   let comments = firebase.database().ref(`${newPostKey}/comments`).push();
   comments.set(commentObj);

   // let ref = firebase.database().getInstance();
   // let post =
}

//ACTION CREATORS
export const login = (props) => {
    return {type: 'LOGIN', payload: loginRequest()};
}

export const addProject = ( userData, project) => {
    return {type: 'ADD_PROJECT', payload: updateProjectsAndSendToDB(userData, project)};
}

export const addPost = (userData, input) => {
    return {type: 'ADD_POST', payload: addInfoToPost(userData, input)};
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

export const addSkill = (userData, skill) => {
  return {type: 'ADD_SKILL', payload: updateSkillsAndSendToDB(userData, skill)};
}

export const fetchSkills = (skills) => {
  return {type: 'FETCH_SKILLS', payload: restructureFetchedFireBaseObjects(skills)};
}

export const addComment = (userData, comment) => {
 return {type: 'ADD_COMMENTS', payload: addReplyToPost(userData, comment)};
}
