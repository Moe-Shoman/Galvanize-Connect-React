import firebase from 'firebase';


export const addCommentToFB = (commentObj, postKey, commentKeyInFireBase) => {
  const comments = firebase.database().ref(`feed/posts/${postKey}/comments/${commentKeyInFireBase}`);
  comments.set(commentObj);
};
export const addCommentsToPost = (userData, comment, postKey, postIndex) => {
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


export const deleteComment = (comment, postKey) => {
  firebase.database().ref(`feed/posts/${postKey}/comments/${comment}`).remove();
  return comment;
};

// action creators
export const addComment = (userData, comment, postKey, postIndex) => ({
  type: 'ADD_COMMENTS',
  payload: addCommentsToPost(userData, comment, postKey, postIndex),
});

export const editComment = (comment, postKey) => ({
  type: 'DELETE_COMMENT', payload: deleteComment(comment, postKey),
});
