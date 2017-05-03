import initialState from "./initialState";

export default function (state = initialState.skills, action) {
  switch (action.type) {
    case 'ADD_SKILL':
      return [...state, action.payload];
      break;
    case 'FETCH_SKILLS':
      return [...state, action.payload]
    default:
      return state;
  }
}
