import initialState from './initialState';

export default function (posts = initialState.posts, action) {
  switch (action.type) {
    case 'ADD_POST':
      return [...posts, action.payload];
    case 'FETCH_POSTS':
      return action.payload;
    case 'ADD_POST':
      const newPosts = [...posts];
      const specificPost = newPosts[action.payload.postIndex];
      newPosts[action.payload.postIndex] = { ...specificPost, comments: [...specificPost.comments, action.payload] };
      return newPosts;
    default:
      return posts;
  }
}
