import initialState from './initialState';

const addProject = (state =initialState, action) => {
  console.log('state ', state);
  switch (action.type) {
    // case 'ADD_PROJECT_PENDING':
    //   return state;
    //   break;
    case 'ADD_PROJECT':
      return {
        ...state,
        projectList: state.projectList.concat(action.payload)
      }
      break;
    // case 'ADD_PROJECT_REJECTED':
    //   return action.payload
    //   break;
    default:
      return state
  }
}

export default addProject;
