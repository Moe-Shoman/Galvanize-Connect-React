import initialState from './initialState';

export default function (state = initialState.comments, action) {
 switch (action.type) {
  case 'ADD_COMMENTS':
   return action.payload
   break;
  default:
   return state
 }
}
