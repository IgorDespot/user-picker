import * as types from '../actions/types.js';

const initialState = {
  users: [],
};

export default function userReducer(state=initialState, action) {
  switch(action.type) {
    case types.ALL_USERS_FETCH_SUCCEEDED:
      return {
        ...state,
        users: action.data
      };
      default:
        return state;
  }
};
