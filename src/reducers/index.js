import { combineReducers } from 'redux';
import GoogleAuthReducer from './reducer_login';
import { reducer as formReducer } from 'redux-form';
import  addProjectReducer  from './reducer_addProject';
// import addMessage from './addMessage_reducer'
import  projects  from './reducer_addProject';

const rootReducer = combineReducers({
  GoogleAuth: GoogleAuthReducer,
  form: formReducer,
  projects

});

export default rootReducer;
