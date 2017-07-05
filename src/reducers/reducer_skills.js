import initialState from './initialState';

export default function (skills = initialState.skills, action) {
  switch (action.type) {
    case 'FETCH_SKILLS':
      return action.payload;
    default:
      return skills;
  }
}
