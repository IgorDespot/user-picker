import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';
import * as types from '../actions/types';


const fetchAllUsers = () => {
  return axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users',
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    throw new Error(error);
  });
};

function* fetchData() {
  try {
    const data = yield call(fetchAllUsers);
    console.log(data)
    yield put({ type: types.ALL_USERS_FETCH_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: types.REQUEST_FAILED, error });
  };
};

export default function* watchFetchData() {
  yield takeEvery(types.ALL_USERS_FETCH_REQUESTED, fetchData);
};