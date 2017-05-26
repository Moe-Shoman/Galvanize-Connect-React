import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { browserHistory, BrowserRouter as Router, Route } from 'react-router-dom';
// import { Router, Route } from 'react-router-dom';
import Home from './Views/Home/';
import Cohort from './Views/Cohort/';
import Profile from './Views/Profile/';
import Login from './Views/Login/';
import requireAuth from './components/HOC/Require_Authentication';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware, promiseMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <div>
        <Route path="/" component={App} />
        <Route path="/Login" component={Login} />
        <Route path="/Home" component={requireAuth(Home)} />
        <Route path="/Profile" component={requireAuth(Profile)} />
        <Route path="/Cohort" component={requireAuth(Cohort)} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
