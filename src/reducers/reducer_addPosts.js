import initialState from './initialState';

export default function (state = initialState.posts, action) {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
      break;
    default:
      return state
  }
}
