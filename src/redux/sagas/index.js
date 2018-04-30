import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import methodSaga from './methodSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    methodSaga(),
    // watchIncrementAsync()
  ]);
}
