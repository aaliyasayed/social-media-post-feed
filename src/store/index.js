import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import Feed from './feed/reducer';
import Auth from './auth/reducer';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

export default createStore(
  combineReducers({
    Feed,
    Auth
  }),
  typeof window !== 'undefined' ? window.__INIT_REDUX_DATA__ : {},
  enhancer
);
