import React from 'react';
import initialState from "./initialState";

export default (state = initialState.skills, action) => {
  switch (action.type) {
    case 'ADD_SKILL':
      return [...state, action.payload];
      break;
    default:
      return state;
  }
}
