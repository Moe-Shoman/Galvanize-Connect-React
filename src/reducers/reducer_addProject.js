import initialState from './initialState';

export default function (projects = initialState.projects, action){
  switch (action.type) {
    case 'ADD_PROJECT':
      return [...projects, action.payload]
      break;
    default:
      return projects
  }
}
