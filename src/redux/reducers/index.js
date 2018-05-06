import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import method from './methodReducer';
import project from './projectReducer';

const store = combineReducers({
  user,
  login,
  method,
  project,
});

export default store;
