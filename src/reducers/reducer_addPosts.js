import initialState from './initialState';

export default function (posts = initialState.posts, action) {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return posts;
  }
}

// import postReducer from 'some file';
// describe('this tests the post reducer', () => {
//   it('returns initial state when state is undefined', () => {
//     expect(postReducer(undefined, {})).toEqual(post);
//   });
//   it('returns action payload when case is hit', () => {
//    expect(postReducer(undefined, { type: 'FETCH_POSTS', payload: {}})).toMatchObject()
//   })
// });
