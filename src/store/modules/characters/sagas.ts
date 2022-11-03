import { all, put, call, takeLatest } from 'redux-saga/effects';
import { api } from '../../../services/api';
import { Types, CharactersActions } from './actions';

import { RequestCharactersAction } from '../../../global/interfaces/charecter';

function* requestCharacters({ search }: RequestCharactersAction) {
  try {
    const { data } = yield call(() => api.get(`/character/?name=${search}`));
    yield put(CharactersActions.setCharacters(data.results));
  } catch (error: any) {
    if (error.response.status === 404) {
      yield put(CharactersActions.setCharacters([]));
      yield put(CharactersActions.changeLoading(false));
    }
  }
}

export default all([takeLatest(Types.REQUEST_CHARACTERS, requestCharacters)]);
