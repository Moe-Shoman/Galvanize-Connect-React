import initialState from './initialState';

export default function (posts = initialState.posts, action) {
  switch (action.type) {
    case 'ADD_POST': {
      return [
        ...posts,
        action.payload,
      ];
    }
    case 'FETCH_POSTS':
      return action.payload;
    case 'ADD_COMMENTS': {
      console.log('am i here?');
      const newPosts = [...posts];
      const specificPost = newPosts[action.payload.postIndex];
      newPosts[action.payload.postIndex] = {
        ...specificPost,
        comments: [
          ...specificPost.comments,
          action.payload,
        ],
      };
      return newPosts;
    }
    case 'DELETE_POST': {
      const postId = action.payload.postIndex;
      return posts.filter(post => post.postIndex !== postId);
    }
    default:
      return posts;
  }
}


// case 'DELETE_COMMENT':
//   const commentId = action.data;
//   return state.filter(comment => comment.id !== commentId);


// case 'DELETE_POST':
//   const postId = action.payload.postIndex;
//   return posts.filter(post => post.postIndex !== postId);
