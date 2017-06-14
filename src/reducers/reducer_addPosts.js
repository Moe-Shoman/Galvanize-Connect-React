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
      const commKey = action.payload.commentKey;
      const currPostKey = action.payload.postkey;

      const updatedComments = posts.map((post) => {
        if (currPostKey === post.postKey) {
          return post.comments.filter(comment => comment.commentKeyInFireBase !== commKey);
        }
      });

      // console.log(updatedComments);


      const newPosts = [...posts];
      const specificPost = newPosts[action.payload.postIndex];
      newPosts[action.payload.postIndex] = {
        ...specificPost,
        comments: [
          ...updatedComments,
          action.payload,
        ],
      };
      return newPosts;
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
