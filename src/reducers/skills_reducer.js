import initialState from "./initialState";

export default function (state = initialState.skills, action) {
  switch (action.type) {
    case 'ADD_SKILL':
      return [...state, action.payload];
    case 'FETCH_SKILLS':
      return [action.payload]
    default:
      return state;
  }
}
