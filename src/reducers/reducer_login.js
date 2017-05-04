import initialState from './initialState';

export default (state = initialState.userData, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return state;
      break;
    case 'LOGIN_FULFILLED':
      return {
        name: action.payload.displayName,
        photo: action.payload.photoURL,
        email: action.payload.email,
        loggedIn: true
      }
      break;
      case 'LOGIN_REJECTED':
        return state
        break;
      case 'ADD_COHORT':
      return Object.assign({}, state, {
        cohort: action.payload
      })
      break;
      case 'ADD_SOCIAL':
      return Object.assign({}, state, action.payload
      )
    default:
      return state
  }
}
