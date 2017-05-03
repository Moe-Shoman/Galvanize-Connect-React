import initialState from './initialState';

export default function(state = initialState.userData, action){
  console.log("userDATA", initialState.userData)
  switch(action.type){
    case 'ADD_COHORT':
    return action.payload;
    break;
    default:
    return state;
  }
}
