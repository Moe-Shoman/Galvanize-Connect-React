import initialState from './initialState';

export default function (jobs = initialState.jobs, action){
  console.log('action', action);
  switch (action.type) {
    case 'GET_JOBS_PENDING':
      return jobs
      break;
    case 'GET_JOBS_FULFILLED':
      return action.payload
      break;
    case 'GET_JOBS_REJECTED':
      return jobs
      break;
    default:
      return jobs
  }
}
