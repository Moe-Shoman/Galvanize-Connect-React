import initialState from './initialState';

export default (state = initialState.userData, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return state;
    case 'LOGIN_FULFILLED':
      return {
        name: action.payload.displayName,
        photo: action.payload.photoURL,
        email: action.payload.email,
        loggedIn: true
      }
      case 'LOGIN_REJECTED':
        return state
      case 'ADD_COHORT':
      return Object.assign({}, state, {
        cohort: action.payload
      })
    default:
      return state
  }
}
