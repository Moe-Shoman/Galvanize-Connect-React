import initialState from './initialState';

export default function (state = initialState.projects, action){
  switch (action.type) {
    case 'ADD_PROJECT':
      return [...state, action.payload]
      break;
    case 'FETCH_PROJECTS':
      return action.payload;
    default:
      return state
  }
}
