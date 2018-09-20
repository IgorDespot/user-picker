import React from 'react';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

import App from '../layouts/App';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState) => {
  const enhancer = compose(
    applyMiddleware(
      logger,
      sagaMiddleware
    )
  );
  return createStore(rootReducer, initialState, enhancer);
};

const store = configureStore({});

sagaMiddleware.run(rootSaga);

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppContainer;
