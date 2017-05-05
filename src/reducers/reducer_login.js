import initialState from './initialState';

export default (state = initialState.userData, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return state;
    case 'LOGIN_FULFILLED':
      return action.payload
      case 'LOGIN_REJECTED':
        return state
      case 'ADD_COHORT':
      return Object.assign({}, state, {
        cohort: action.payload
      })
      break;
      case 'ADD_SOCIAL':
      return Object.assign({}, state, action.payload)
      break;
      case 'FETCH_LINKS':
      return Object.assign({}, state,{
        LinkedIn: action.payload.LinkedIn,
        GitHub: action.payload.GitHub,
        Twitter: action.payload.Twitter
      });
      break;
    default:
      return state
  }
}
