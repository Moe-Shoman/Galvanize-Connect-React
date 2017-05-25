import { combineReducers } from 'redux';
import posts from './reducer_addPosts';
import userData from './reducer_userData';
import jobs from './reducer_getJobs';
import cohortVal from './reducer_returnCohort';
import authentication from './authentication_reducer';


const rootReducer = combineReducers({
  userData,
  jobs,
  posts,
  cohortVal,
  authentication,
});

export default rootReducer;
