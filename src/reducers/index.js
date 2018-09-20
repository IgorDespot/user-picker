import { combineReducers } from 'redux';
import userReducer from './users.js';

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
