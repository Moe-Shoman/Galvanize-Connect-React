import initialState from './initialState';

export default (state = initialState.userData, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return state;
// <<<<<<< HEAD
//     case 'LOGIN_FULFILLED':
//       return Object.assign({}, state, action.payload);
//     case 'LOGIN_REJECTED':
//       return state;
//     case 'ADD_PROJECT':
//       return Object.assign({}, state, { projects: [...state.projects, action.payload] });
//     case 'ADD_SKILL':
//       return Object.assign({}, state, { skills: state.skills.concat(action.payload) });
//     case 'ADD_COHORT':
//       return Object.assign({}, state, {
//         cohort: action.payload,
//       });
//       break;
//     case 'ADD_SOCIAL':
//       return Object.assign({}, state, action.payload);
//       break;
//     case 'FETCH_LINKS':
//       return Object.assign({}, state, {
// =======
    }
    case 'LOGIN_FULFILLED': {
      return Object.assign({}, state, action.payload);
    }
    case 'LOGIN_REJECTED': {
      return state;
    }
    case 'ADD_PROJECT': {
      return Object.assign({}, state, { projects: [...state.projects, action.payload] });
    }
    case 'ADD_SKILL': {
      return Object.assign({}, state, { skills: state.skills.concat(action.payload) });
    }
    case 'ADD_COHORT': {
      return Object.assign({}, state, { cohort: action.payload });
    }
    case 'ADD_SOCIAL': {
      return Object.assign({}, state, action.payload);
    }
    case 'FETCH_LINKS': {
      return Object.assign({}, state, {
// >>>>>>> e625510d014c2b33906eb43e23dca3b541b836e0
        LinkedIn: action.payload.LinkedIn,
        GitHub: action.payload.GitHub,
        Twitter: action.payload.Twitter,
      });
    }
    default:
      return state;
  }
};
