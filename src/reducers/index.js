import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import  addProjectReducer  from './reducer_addProject';
import  projects  from './reducer_addProject';
import posts from './reducer_addPosts';
import userData  from './reducer_login';
import jobs from './reducer_getJobs';
const rootReducer = combineReducers({
  form: formReducer,
  userData,
  projects,
  jobs,
  posts,
});

export default rootReducer;
