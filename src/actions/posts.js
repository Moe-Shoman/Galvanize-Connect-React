import firebase from 'firebase';


export const addPostToFireBase = (postObject, postKey) => {
  const PostsInFireBase = firebase.database().ref(`feed/posts/${postKey}`);
  PostsInFireBase.set(postObject);
};

export const addInfoToPost = (userData, input) => {
  const postKey = firebase.database().ref('feed').child('posts').push().key;
  const postInfo = {
    uid: userData.uid,
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


export const restructureFetchedFireBaseObjects = (object) => {
  if (!object) {
    return [];
  }
  const restructuredPosts = Object.values(object);
  return restructuredPosts;
};

export const restructurePostsAndComments = (PostsInFireBase) => {
  const restructuredPosts = restructureFetchedFireBaseObjects(PostsInFireBase);
  restructuredPosts.forEach((post) => {
    if (post.comments) {
      post.comments = Object.values(post.comments);
    }
  });
  return restructuredPosts;
};


export const deleteFromFB = (posts) => {
  firebase.database().ref(`feed/posts/${posts.postKey}`).remove();
  return posts.postKey;
};

export const editPostFromFB = (posts, userData, input) => {
  const postInfo = {
    uid: posts.uid,
    post: input,
    name: userData.name,
    photo: userData.photo,
    date: (new Date()).toString(),
    postKey: posts.postKey,
  };
  firebase.database().ref(`feed/posts/${posts.postKey}`).update(postInfo);
  return postInfo;
};


// action CREATORS

export const addPost = (userData, input) => ({
  type: 'ADD_POST',
  payload: addInfoToPost(userData, input),
});


export const fetchPosts = posts => ({
  type: 'FETCH_POSTS',
  payload: restructurePostsAndComments(posts),
});

export const deletePost = posts => ({
  type: 'DELETE_POST', payload: deleteFromFB(posts),
});

export const editPost = (posts, userData, input) => ({
  type: 'EDIT_POST', payload: editPostFromFB(posts, userData, input),
});
