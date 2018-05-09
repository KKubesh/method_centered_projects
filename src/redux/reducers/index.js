import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import method from './methodReducer';
import project from './projectReducer';
import projectInfo from './projectInfoReducer';

//stores all reducers into one
const store = combineReducers({
  user,
  login,
  method,
  project,
  projectInfo,
});

export default store;
