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
    case 'DELETE_POST': {
      const postId = action.payload;
      return posts.filter(post => post.postKey !== postId);
    }
    case 'DELETE_COMMENT': {
      const commentId = action.payload;
      // console.log('posts =========== ', posts);

      return posts.filter(item => item.comments.filter((comm) => {
        console.log('comm =========== ', comm);
        return comm.commentKeyInFireBase !== commentId;
      }));
      // return posts.forEach(item => item.comments.filter((comment) => {
      //   console.log('comments are ', comment);
      //   return comment.commentKeyInFireBase !== commentId;
      // }));
    }
    case 'ADD_COMMENTS': {
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
    default:
      return posts;
  }
}
