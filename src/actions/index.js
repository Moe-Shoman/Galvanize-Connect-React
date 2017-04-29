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

const addProjectToFireBase = (userData, projectInfo) => {
  const userInfo = {
    project: userData.project,
    description: userData.description
  }
  // console.log("The DATA HERE", userData.user);
  // console.log("The PRO HERE", projectInfo);
  // let passedInProject = form['object Object'].values;
  // console.log("YWAYAYAYA", passedInProject);
  // console.log("FORM HERE !!!!!", form['object Object'].values.projectName);
  // // console.log("This is the PROJECT info", projectObj);
  let ProjectInFB = firebase.database().ref(`users/${userData.user}`).push();
   ProjectInFB.set(userInfo);

}

export const addInfoToProject = (userData, form) => {
  // console.log("IN addInfoToProject");
  const allProVals = form['object Object'].values
  // console.log("I want to see this", allProVals);
  console.log("USER DATA INSIDE ADDINF", userData.name);
  const projectInfo ={
    user: userData.name,

    // projects:[],
    project: allProVals.projectName,
    description: allProVals.description
  }
  // let passedInProject = form['object Object'].values;
  // console.log("YWAYAYAYA", passedInProject);
  // console.log("FORM HERE !!!!!", form['object Object'].values.projectName);
  // // console.log("This is the PROJECT info", projectObj);
  // let ProjectInFB = firebase.database().ref(`users/${name}`).push();
  //  ProjectInFB.set(passedInProject);
  //  return
  addProjectToFireBase(projectInfo, userData);
  return projectInfo;
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

function restructureFetchedFireBasePosts(posts) {
  let restructuredPosts = Object.values(posts)
  return restructuredPosts;
}

//ACTION CREATORS
export const login = (props) => {
    return {type: 'LOGIN', payload: loginRequest()};
}

export const addProject = ( userData, form) => {
    return {type: 'ADD_PROJECT', payload: addInfoToProject(userData,form)};
}
// export const editProject = () => {
//    return { type: 'DELETE_PROJECT', payload: removeProject()}
// }


export const addPost = (userData, form) => {
    return {type: 'ADD_POST', payload: addInfoToPost(userData, form)};
}


export const getJobs = () => {
    return {type: 'GET_JOBS', payload: getJobsRequest()};
}

export const fetchPosts = (posts) => {
  return {type: 'FETCH_POSTS', payload: restructureFetchedFireBasePosts(posts)};
}

export const addSkill = () => {
  return {type: 'Add_SKILL', payload: ""}
}
