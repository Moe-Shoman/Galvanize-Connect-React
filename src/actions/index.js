// Helper functions
export * from './authentication';
export * from './jobs';
import firebase from 'firebase';


const addPostToFireBase = (postObject, postKey) => {
  const PostsInFireBase = firebase.database().ref(`feed/posts/${postKey}`);
  PostsInFireBase.set(postObject);
};

export const addInfoToPost = (userData, input) => {
  const postKey = firebase.database().ref('feed').child('posts').push().key;
  const postInfo = {
    post: input,
    name: userData.name,
    photo: userData.photo,
    date: (new Date()).toString(),
    postKey,
    comments: [],
  };
  addPostToFireBase(postInfo, postKey);
  return postInfo;
};
function restructureFetchedFireBaseObjects(object) {
  const restructuredPosts = Object.values(object);
  return restructuredPosts;
}

function restructurePostsAndComments(PostsInFireBase) {
  const restructuredPosts = restructureFetchedFireBaseObjects(PostsInFireBase);
  restructuredPosts.forEach((post) => {
    if (post.comments) {
      post.comments = Object.values(post.comments);
    }
  });
  return restructuredPosts;
}

function addProjectToFireBase(username, project) {
  const userProjectsInFireBase = firebase.database().ref(`users/${username}/projects`).push();
  userProjectsInFireBase.set(project);
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
  const userSocialInFireBase = firebase.database();
  userSocialInFireBase.ref('users').child(`${username}`).update({ GitHub: SocialInks.GitHub, LinkedIn: SocialInks.LinkedIn, Twitter: SocialInks.Twitter });
}

function updateLinksAndSendToBD(userData, SocialInks) {
  const username = userData.name;
  addSocialLinksToFireBase(username, SocialInks);
  return SocialInks;
}

function addCohortToFireBase(userData, cohort) {
  const userCohortInFireBase = firebase.database();
  userCohortInFireBase.ref('users').child(`${userData.name}`).update({ cohort });
  userCohortInFireBase.ref('cohorts').child(`${cohort}`).push().set({ name: userData.name, photo: userData.photo });
}

const addCommentToFB = (commentObj, postKey, commentKeyInFireBase) => {
  const comments = firebase.database().ref(`feed/posts/${postKey}/comments/${commentKeyInFireBase}`).push();
  comments.set(commentObj);
};
const addCommentsToPost = (userData, comment, postKey, postIndex) => {
  const commentKeyInFireBase = firebase.database().ref(`feed/posts/${postKey}/comments`).push().key;
  const commentInfo = {
    comment,
    name: userData.name,
    time: new Date().toString(),
    photo: userData.photo,
    postKey,
    commentKeyInFireBase,
    postIndex,
  };
  addCommentToFB(commentInfo, postKey, commentKeyInFireBase);
  return commentInfo;
};


const deletePost = (posts) => {
  firebase.database().ref(`feed/posts/${posts.postKey}`).remove();
  return posts.postKey;
};

const deleteComment = (comment, postKey) => {
  console.log('comment is ', comment);
  console.log('postKey is ', postKey);
  // console.log('comment.commentKeyInFireBase is ', postKey);
  // firebase.database().ref(`feed/posts/${postKey}/comment/${comment.commentKeyInFireBase}`).remove();
  // return comment.commentKeyInFireBase;
};


// ACTION CREATORS
export const addProject = (userData, project) => ({
  type: 'ADD_PROJECT',
  payload: updateProjectsAndSendToDB(userData, project),
});

export const addPost = (userData, input) => ({
  type: 'ADD_POST',
  payload: addInfoToPost(userData, input),
});


export const fetchPosts = posts => ({
  type: 'FETCH_POSTS',
  payload: restructurePostsAndComments(posts),
});


export const fetchCohort = cohort => ({
  type: 'FETCH_COHORT',
  payload: restructureFetchedFireBaseObjects(cohort),
});


export const addSkill = (userData, skill) => ({
  type: 'ADD_SKILL',
  payload: updateSkillsAndSendToDB(userData, skill),
});

export const addComment = (userData, comment, postKey, postIndex) => ({
  type: 'ADD_COMMENTS',
  payload: addCommentsToPost(userData, comment, postKey, postIndex),
});

export const addCohort = (userData, cohort) => ({
  type: 'ADD_COHORT',
  payload: updateCohortAndSendToDB(userData, cohort),
});

export const addSocialLinks = (userData, SocialInks) => ({
  type: 'ADD_SOCIAL',
  payload: updateLinksAndSendToBD(userData, SocialInks),
});

export const fetchSocial = SocialInks => ({ type: 'FETCH_LINKS', payload: SocialInks });

export const editPost = posts => ({
  type: 'DELETE_POST', payload: deletePost(posts),
});

export const editComment = (comment, postKey) => ({
  type: 'DELETE_COMMENT', payload: deleteComment(comment, postKey),
});
