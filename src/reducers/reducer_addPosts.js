import initialState from './initialState';

export default function (posts = initialState.posts, action) {
  switch (action.type) {
    case 'ADD_POST':
      return [...posts, action.payload];
      break;
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return posts
  }
}
