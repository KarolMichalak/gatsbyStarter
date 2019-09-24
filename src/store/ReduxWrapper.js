import React from 'react';
import { Provider,  } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore as reduxCreateStore, applyMiddleware, compose, } from 'redux';
import rootReducer from './store';

const composeEnhancers =
    process.env.NODE_ENV === 'development' && typeof window !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;

const createStore = () => reduxCreateStore(rootReducer,
  composeEnhancers(applyMiddleware(thunk)));

export default ({ element }) => (
  <Provider store={createStore()}>
  {element}
  </Provider>
);