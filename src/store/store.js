import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);

export default store;
