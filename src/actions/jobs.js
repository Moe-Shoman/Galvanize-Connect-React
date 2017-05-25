import axios from 'axios';

export const getJobsRequest = () => axios.get('http://service.dice.com/api/rest/jobsearch/v1/simple.json?text=javascript&city=94102&pgcnt=20').then(res => res.data.resultItemList);


export const getJobs = () => ({
  type: 'GET_JOBS',
  payload: getJobsRequest(),
});
