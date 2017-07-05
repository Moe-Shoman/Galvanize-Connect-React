import initialState from './initialState';

export default function (articles = initialState.articles, action) {
  switch (action.type) {
    case 'GET_ARTICLES_PENDING':
      return { ...articles, isFetching: true };
    case 'GET_ARTICLES_FULFILLED':
      return action.payload.articles;
    case 'GET_ARTICLES_REJECTED':
      return articles;
    default:
      return articles;
  }
}
