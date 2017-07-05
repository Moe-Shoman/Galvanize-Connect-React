import initialState from './initialState';

export default function (social = initialState.social, action) {
  switch (action.type) {
    case 'FETCH_LINKS':
      return action.payload;
    default:
      return social;
  }
}
