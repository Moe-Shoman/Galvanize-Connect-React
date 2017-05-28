import firebase from 'firebase';


export const addPostToFireBase = (postObject, postKey) => {
  const PostsInFireBase = firebase.database().ref(`feed/posts/${postKey}`);
  PostsInFireBase.set(postObject);
};

export const addInfoToPost = (userData, input) => {
  console.log('userData is -------- ', userData);
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


export const restructureFetchedFireBaseObjects = (object) => {
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


export const deletePost = (posts) => {
  firebase.database().ref(`feed/posts/${posts.postKey}`).remove();
  return posts.postKey;
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

export const editPost = posts => ({
  type: 'DELETE_POST', payload: deletePost(posts),
});
