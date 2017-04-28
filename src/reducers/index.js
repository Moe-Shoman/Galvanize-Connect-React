import { combineReducers } from 'redux';
import GoogleAuthReducer from './reducer_login';
import { reducer as formReducer } from 'redux-form';
import  addProjectReducer  from './reducer_addProject';
import  projects  from './reducer_addProject';
import posts from './reducer_addPosts'

import jobs from './reducer_getJobs';
const rootReducer = combineReducers({
  GoogleAuth: GoogleAuthReducer,
  form: formReducer,
  projects,
  jobs,
  posts 
});

export default rootReducer;
