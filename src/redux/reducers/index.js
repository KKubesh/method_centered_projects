import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import method from './methodReducer';

const store = combineReducers({
  user,
  login,
  method,
});

export default store;
