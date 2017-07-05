import addPost from '../reducer_addPosts';

const initialState = [];
const payload = { foo: 'foo' };

describe('this tests the post reducer', () => {
  it('returns initial state when action does not match case', () => {
    expect(addPost(initialState, {})).toEqual(initialState);
  });
  it('should handle FETCH_POSTS', () => {
    expect(addPost({ foo: 'foo' }, payload, { type: 'FETCH_POSTS' })).toEqual(payload);
  });
});
