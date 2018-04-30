import { takeEvery, put } from 'redux-saga/effects';
import { callGetMethod } from '../requests/methodRequests';

function* methodSaga() {

    try {
        const getMethod = yield callGetMethod();
        yield put({
          type: 'GET_METHOD',
          payload: getMethod,
        });
      } catch (error) {
        yield put({
          type: 'GET_REQUEST_FAILED',
          message: error.data,
        });
      }
}
  
export default methodSaga;