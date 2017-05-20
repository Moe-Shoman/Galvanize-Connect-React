import initialState from './initialState';

export default function (jobs = initialState.jobs, action) {
  switch (action.type) {
    case 'GET_JOBS_PENDING':
      return jobs;
    case 'GET_JOBS_FULFILLED':
      return action.payload;
    case 'GET_JOBS_REJECTED':
      return jobs;
    default:
      return jobs;
  }
}
