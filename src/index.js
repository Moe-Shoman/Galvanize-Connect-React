import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route } from 'react-router-dom';
import Home from './Views/Home/';
import Cohort from './Views/Cohort/';
import Profile from './Views/Profile/';
import requireAuth from './components/HOC/Require_Authentication';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware, promiseMiddleware()));

// suggestion to include our routes here.
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'),
// );

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/Home" component={requireAuth(Home)} />
        <Route path="/Profile" component={requireAuth(Profile)} />
        <Route path="/Cohort" component={requireAuth(Cohort)} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
