import initialState from './initialState';

export default function (state = initialState.posts, action) {
 switch (action.type) {
  case 'ADD_COMMENTS':
  console.log(action.payload.postIndex, 'index yo', state, 'state in ADD COMMENTS REDUCER');
   return state[action.payload.postIndex]['comments'].concat(action.payload)
   break;
  default:
   return state
 }
}
