export default function (state = false, action) {
  switch (action.type) {
    case 'AUTHENTICATE':
      return action.payload;
    case 'ADD_TO_STORE':
      return action.payload;
    case 'CHECK_FOR_AUTHENTICATED_USER':
      return action.payload;
    default:
      return state;
  }
}
