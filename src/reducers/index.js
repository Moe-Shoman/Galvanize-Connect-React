import { combineReducers } from 'redux';
import GoogleAuthReducer from './reducer_login';

const rootReducer = combineReducers({
  GoogleAuth: GoogleAuthReducer
});

export default rootReducer;
