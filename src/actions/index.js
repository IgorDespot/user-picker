import * as types from './types.js';

export const requestAllUsers = () => ({
  type: types.ALL_USERS_FETCH_REQUESTED,
});

export const requestSingleCountry = (name) => ({
  type: types.SINGLE_USER_FETCH_REQUESTED,
  name
});
