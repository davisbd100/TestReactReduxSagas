import { takeLatest } from 'redux-saga/effects';
import { GET_CAT_FACT, } from '../reducers/cats';
import { handleGetNewCatFact } from './handler/cats';

export function* watcherSaga() {
  yield takeLatest(GET_CAT_FACT, handleGetNewCatFact);
}