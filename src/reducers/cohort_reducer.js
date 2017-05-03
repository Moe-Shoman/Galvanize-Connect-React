import initialState from './initialState';

export default function(state = initialState.userData, action){
  switch(action.type){
    case 'ADD_COHORT':
    return action.payload;
    default:
    return state;
  }
}
