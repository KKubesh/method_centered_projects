import { takeEvery, put } from 'redux-saga/effects';
import { callGetMethod, callAddMethod } from '../requests/methodRequests';
import LoginDialog from '../../components/NewMethodDialog/NewMethodDialog';

function* methodSaga() {
  console.log('root saga loaded');
  yield takeEvery('GET_METHOD', getMethodSaga);
  yield takeEvery('ADD_METHOD', postMethodSaga);
}

function* getMethodSaga() {
  try {
      const getMethod = yield callGetMethod();
      yield put({
        type: 'SET_METHOD',
        payload: getMethod,
      });
    } catch (error) {
      yield put({
        type: 'GET_REQUEST_FAILED',
        message: error.data,
      });
    }
}

function* postMethodSaga() {
  try {
      const addMethod = yield callAddMethod();
      yield put({
        type: 'ADD_METHOD',
        payload: addMethod,
      });
    } catch (error) {
      yield put({
        type: 'GET_REQUEST_FAILED',
        message: error.data,
      });
    }
}
  
export default methodSaga;