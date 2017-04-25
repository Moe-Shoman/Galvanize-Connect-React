import initialState from './initialState';

const GoogleAuth = (state = initialState.GoogleAuth, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return state;
      break;
    case 'LOGIN_FULFILLED':
      return {
        ...state,
        userData: action.payload
      }
      break;
      case 'LOGIN_REJECTED':
        return action.payload
        break;
    default:
      return state
  }
}
export default GoogleAuth;
