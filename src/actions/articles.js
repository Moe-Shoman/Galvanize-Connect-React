// import axios from 'axios';

// export const getJobsRequest = () => axios.get('http://service.dice.com/api/rest/jobsearch/v1/simple.json?text=javascript&city=94102&pgcnt=20').then(res => res.data.resultItemList);


export const getArticlesRequest = () => fetch(' https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=0eb7021bf1b044538207181f6648a32f',
  )
  .then(res => res.json());


// action creator
export const getArticles = () => ({
  type: 'GET_ARTICLES',
  payload: getArticlesRequest(),
});
