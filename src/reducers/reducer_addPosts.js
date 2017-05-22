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
    case 'ADD_POST':
      const newPosts = [...posts];
      const specificPost = newPosts[action.payload.postIndex];
      newPosts[action.payload.postIndex] = { ...specificPost, comments: [...specificPost.comments, action.payload] };
      return newPosts;
//     case 'ADD_COMMENTS': {
//       const newPosts = [...posts];
//       const specificPost = newPosts[action.payload.postIndex];
//       newPosts[action.payload.postIndex] = {
//         ...specificPost,
//         comments: [
//           ...specificPost.comments,
//           action.payload,
//         ],
//       };
//       return newPosts;
//     }
// // >>>>>>> e625510d014c2b33906eb43e23dca3b541b836e0
    default:
      return posts;
  }
}
