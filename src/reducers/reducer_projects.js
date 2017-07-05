import initialState from './initialState';

export default function (projects = initialState.projects, action) {
  switch (action.type) {
    case 'FETCH_PROJECTS':
      return action.payload;
    default:
      return projects;
  }
}
