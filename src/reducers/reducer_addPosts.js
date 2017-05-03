import initialState from './initialState';

export default function (posts = initialState.posts, action) {
  switch (action.type) {
    case 'ADD_POST':
      return [...posts, action.payload];
      break;
    case 'FETCH_POSTS':
      return action.payload;
    case 'ADD_COMMENTS':
      console.log(action.payload.postIndex, 'index yo', posts, 'state in ADD COMMENTS REDUCER', posts[action.payload.postIndex], 'specific Post', 'action payload', action.payload);
       return [...posts, Object.assign({}, posts[action.payload.postIndex],
         posts[action.payload.postIndex]['comments'].concat(action.payload)
       )]
       break;
    default:
      return posts
  }
}
// posts[action.payload.postIndex]['comments'] : posts[action.payload.postIndex]['comments'].concat(action.payload)
