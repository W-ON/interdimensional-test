import { all } from 'redux-saga/effects';

import characters from './modules/characters/sagas';

export default function* rootSaga() {
  yield all([characters]);
}
