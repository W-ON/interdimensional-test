import createSagaMiddleware from 'redux-saga';
import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import rootSaga from './sagas';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export { store };
