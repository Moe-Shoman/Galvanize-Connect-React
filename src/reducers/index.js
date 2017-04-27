import { combineReducers } from 'redux';
import GoogleAuthReducer from './reducer_login';
import { reducer as formReducer } from 'redux-form';
import  addProjectReducer  from './reducer_addProject';
import addMessage from './addMessage_reducer'

const rootReducer = combineReducers({
  GoogleAuth: GoogleAuthReducer,
  form: formReducer,
  addProject: addProjectReducer,
  addMessage
});

export default rootReducer;
