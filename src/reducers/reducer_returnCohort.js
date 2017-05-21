import initialState from './initialState';

export default function (state = initialState.cohortVal, action) {
  switch (action.type) {
    case 'FETCH_COHORT':
      return action.payload;
    default:
      return state;
  }
}
