import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, logger),
  )
);

sagaMiddleware.run(rootSaga);

export default store;