import { createStore, compose } from 'redux';
import mainReducer from '../reducers/mainReducer';

const store : Function = (initialState) => (
  createStore(
    mainReducer,
    initialState,
    compose(
      global.devToolsExtension && process.env.NODE_ENV !== 'production' ? global.devToolsExtension() : f => f
    )
  )
);

export default store;
