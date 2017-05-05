//Helper functions
import firebase from 'firebase';
import axios from 'axios';

const addNonExistingUsers = (userObject) => {
    const {displayName, email, photoURL} = userObject;
    console.log('userObject', userObject, displayName);
    const userInFireBase = firebase.database().ref(`users/${displayName}`);
    return userInFireBase.once("value").then((snapshot) => {
        if (!snapshot.exists()) {
            console.log(displayName);
            const newUser = {
                name: displayName,
                email,
                photo: photoURL,
                linkedIn: null,
                gitHub: null,
                twitter: null,
                projects: '',
                skills: ''
            }
            userInFireBase.set(newUser);
            return newUser;
        }
        const registeredUser = snapshot.val();
        registeredUser.projects = Object.values(registeredUser.projects);
        registeredUser.skills = Object.values(registeredUser.skills);
        return registeredUser;
    })
}
const loginRequest = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    provider.addScope('https://www.googleapis.com/auth/plus.login')
    return firebase.auth().signInWithPopup(provider).then((res) => {
        const user = res.user;
        return addNonExistingUsers(user)
    }).catch((err) => console.error(err))
}

const getJobsRequest = () => {
    return axios.get('http://service.dice.com/api/rest/jobsearch/v1/simple.json?text=javascript&city=94102&pgcnt=20').then((res) => res.data.resultItemList)
}

const addPostToFireBase = (postObject, postKey) => {
    const PostsInFireBase = firebase.database().ref(`feed/posts/${postKey}`);
    PostsInFireBase.set(postObject);
}

export const addInfoToPost = (userData, input) => {
    const postKey = firebase.database().ref('feed').child('posts').push().key;
    const postInfo = {
        post: input,
        name: userData.name,
        photo: userData.photo,
        date: (new Date()).toString(),
        postKey,
        comments: []
    }
    addPostToFireBase(postInfo, postKey);
    return postInfo;
}
function restructurePostsAndComments(PostsInFireBase) {
    const restructuredPosts = restructureFetchedFireBaseObjects(PostsInFireBase);
    restructuredPosts.forEach((post) => {
        if (post.comments) {
            post.comments = Object.values(post.comments)
        }
    })
    return restructuredPosts
}

function restructureFetchedFireBaseObjects(object) {
    const restructuredPosts = Object.values(object)
    return restructuredPosts;
}

function addProjectToFireBase(username, project) {
    const userProjectsInFireBase = firebase.database().ref(`users/${username}/projects`).push();
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

function updateCohortAndSendToDB(userData, cohort) {
    addCohortToFireBase(userData, cohort);
    return cohort;

}

function addSkillToFireBase(userName, skill) {
    const userSkillsInFireBase = firebase.database().ref(`users/${userName}/skills`).push();
    userSkillsInFireBase.set(skill);
}

function addSocialLinksToFireBase(username, SocialInks) {
    let userSocialInFireBase = firebase.database()
    userSocialInFireBase.ref(`users`).child(`${username}`).update({GitHub: SocialInks.GitHub, LinkedIn: SocialInks.LinkedIn, Twitter: SocialInks.Twitter});
}

function updateLinksAndSendToBD(userData, SocialInks) {
    const username = userData.name;
    addSocialLinksToFireBase(username, SocialInks);
    return SocialInks;
}

export const addReplyToPost = (userData, comment, postKey, postIndex) => {
    const commentInfo = {
        comment: comment,
        name: userData.name,
        time: (new Date()).toString(),
        photo: userData.photo,
        postIndex
    }
    addCommentToFB(commentInfo, postKey);
    return commentInfo;
}

function addCohortToFireBase(userData, cohort) {
    const userCohortInFireBase = firebase.database();
    userCohortInFireBase.ref(`users`).child(`${userData.name}`).update({cohort});
    userCohortInFireBase.ref(`cohorts`).child(`${cohort}`).push().set({name: userData.name, photo: userData.photo});
}

const addCommentToFB = (commentObj, postKey) => {
    const comments = firebase.database().ref(`feed/posts/${postKey}/comments`).push();
    comments.set(commentObj);
}
const addCommentsToPost = (userData, comment, postKey, postIndex) => {
    const commentInfo = {
        comment: comment,
        name: userData.name,
        time: (new Date()).toString(),
        photo: userData.photo,
        postIndex
    };
    addCommentToFB(commentInfo, postKey);
    return commentInfo;
}


//ACTION CREATORS
export const login = (props) => {
    return {type: 'LOGIN', payload: loginRequest()};
}

export const addProject = (userData, project) => {
    return {
        type: 'ADD_PROJECT',
        payload: updateProjectsAndSendToDB(userData, project)
    };
}

export const addPost = (userData, input) => {
    return {
        type: 'ADD_POST',
        payload: addInfoToPost(userData, input)
    };
}

export const getJobs = () => {
    return {type: 'GET_JOBS', payload: getJobsRequest()};
}

export const fetchPosts = (posts) => {
    return {type: 'FETCH_POSTS', payload: restructurePostsAndComments(posts)};
}



export const fetchCohort = (cohort) => {
  // console.log('cohort vlaue ins fetchCohort is  ========', cohort);
  return {type: 'FETCH_COHORT', payload: restructureFetchedFireBaseObjects(cohort)};
}



export const addSkill = (userData, skill) => {
    return {
        type: 'ADD_SKILL',
        payload: updateSkillsAndSendToDB(userData, skill)
    };
}

export const addComment = (userData, comment, postKey, postIndex) => {
    return {
        type: 'ADD_COMMENTS',
        payload: addCommentsToPost(userData, comment, postKey, postIndex)
    };
}

export const addCohort = (userData, cohort) => {
    return {
        type: 'ADD_COHORT',
        payload: updateCohortAndSendToDB(userData, cohort)
    };
}

export const addSocialLinks = (userData, SocialInks) => {
    return {
        type: 'ADD_SOCIAL',
        payload: updateLinksAndSendToBD(userData, SocialInks)
    }
}

export const fetchSocial = (SocialInks) => {
    return {type: 'FETCH_LINKS', payload: SocialInks};
}
