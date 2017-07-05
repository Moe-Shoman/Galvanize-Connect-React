import { combineReducers } from 'redux';
import posts from './reducer_addPosts';
import userData from './reducer_userData';
import articles from './reducer_getArticles';
import cohortVal from './reducer_returnCohort';
import authentication from './authentication_reducer';
import projects from './reducer_projects';
import skills from './reducer_skills';
import social from './reducer_social';


// const rootReducer = combineReducers({
//   userData,
//   jobs,
//   posts,
//   cohortVal,
//   authentication,
//   projects,
//   skills,
//   social,
// });
//
// export default rootReducer;


const appReducer = combineReducers({
  userData,
  articles,
  posts,
  cohortVal,
  authentication,
  projects,
  skills,
  social,
});

// const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
