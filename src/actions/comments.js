import firebase from 'firebase';


export const addCommentToFB = (commentObj, postKey, commentKeyInFireBase) => {
  const comments = firebase.database().ref(`feed/posts/${postKey}/comments/${commentKeyInFireBase}`);
  comments.set(commentObj);
};
export const addCommentsToPost = (userData, comment, postKey, postIndex) => {
  const commentKeyInFireBase = firebase.database().ref(`feed/posts/${postKey}/comments`).push().key;
  const commentInfo = {
    uid: userData.uid,
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


export const deleteCommentFromFB = (commentObj) => {
  firebase.database().ref(`feed/posts/${commentObj.postKey}/comments/${commentObj.commentKeyInFireBase}`).remove();
  return commentObj;
};

export const editCommentInFB = (comment, user, input) => {
  const commentInfo = {
    uid: user.uid,
    comment: input,
    name: user.name,
    time: new Date().toString(),
    photo: user.photo,
    postKey: comment.postKey,
    commentKeyInFireBase: comment.commentKeyInFireBase,
    postIndex: comment.postIndex,
  };

  firebase.database().ref(`feed/posts/${comment.postKey}/comments/${comment.commentKeyInFireBase}`).update(commentInfo);
  return commentInfo;
};

// action creators
export const addComment = (userData, comment, postKey, postIndex) => ({
  type: 'ADD_COMMENTS',
  payload: addCommentsToPost(userData, comment, postKey, postIndex),
});

export const deleteComment = commentObj => ({
  type: 'DELETE_COMMENT', payload: deleteCommentFromFB(commentObj),
});

export const editComment = (comment, user, input) => ({
  type: 'EDIT_COMMENT', payload: editCommentInFB(comment, user, input),
});
