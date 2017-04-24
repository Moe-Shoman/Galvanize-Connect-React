import { combineReducers } from 'redux';
import GoogleAuth from './reducer_login';

const rootReducer = combineReducers({
  GoogleAuth: GoogleAuthReducer
});

export default rootReducer;
