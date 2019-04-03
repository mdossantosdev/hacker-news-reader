import { createStore } from 'redux';
import reducer from './reducer';
import middleware from './middleware';

const configureStore = initialeState => {
  const store = createStore(reducer, initialeState, middleware);
  return store;
};

export default configureStore;
