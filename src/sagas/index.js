import { all } from 'redux-saga/effects';
import watchFetchData from './fetchUserSaga';

export default function* rootSaga() {
  yield all([
    watchFetchData(),
  ]);
}