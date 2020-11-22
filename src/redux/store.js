import {createStore, combineReducers, applyMiddleware} from 'redux';

import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
//
import {Animations} from './reducers/Animations.reducers';
const reducers = combineReducers({
  Animations,
});

const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
