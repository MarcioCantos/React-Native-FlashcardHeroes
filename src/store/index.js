import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import logger from '../middlewares/logger';

// const store = createStore(reducer, applyMiddleware(logger));
const store = createStore(reducer);

export default store;
