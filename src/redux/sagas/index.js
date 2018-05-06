import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import methodSaga from './methodSaga';
import projectSaga from './projectSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    methodSaga(),
    projectSaga(),
    // watchIncrementAsync()
  ]);
}
