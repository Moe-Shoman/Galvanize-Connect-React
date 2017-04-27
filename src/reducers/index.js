import { combineReducers } from 'redux';
import GoogleAuthReducer from './reducer_login';
import { reducer as formReducer } from 'redux-form';
import  projects  from './reducer_addProject';
import jobs from './reducer_getJobs';
const rootReducer = combineReducers({
  GoogleAuth: GoogleAuthReducer,
  form: formReducer,
  projects,
  jobs
});

export default rootReducer;
