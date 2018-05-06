import { takeEvery, put } from 'redux-saga/effects';
import { callGetProject, callAddProject, callDelProject, callPutProject } from '../requests/projectRequest';

function* projectSaga() {
  console.log('project saga loaded');
  yield takeEvery('GET_PROJECT', getProjectSaga);
  yield takeEvery('ADD_PROJECT', postProjectSaga);
  yield takeEvery('DEL_PROJECT', delProjectSaga);
  yield takeEvery('PUT_PROJECT', putProjectSaga);
}

function* getProjectSaga() {
  try {
      const getProject = yield callGetProject();
      yield put({
        type: 'SET_PROJECT',
        payload: getProject,
      });
    } catch (error) {
      yield put({
        type: 'GET_REQUEST_FAILED',
        message: error.data,
      });
    }
}

function* postProjectSaga(action) {
  try {
      const addProject = yield callAddProject(action);
      yield put({
        type: 'GET_PROJECT',
      });
    } catch (error) {
      yield put({
        type: 'GET_REQUEST_FAILED',
        message: error.data,
      });
    }
}

function* putProjectSaga(action) {
  try {
      const putProject = yield callPutProject(action);
      yield put({
        type: 'GET_PROJECT',
      });
    } catch (error) {
      yield put({
        type: 'GET_REQUEST_FAILED',
        message: error.data,
      });
    }
}

function* delProjectSaga(action) {
  try {
    const delProject = yield callDelProject(action);
    yield put({
      type: 'GET_PROJECT',
    });
  } catch (error) {
    yield put({
      type: 'GET_REQUEST_FAILED',
      message: error.data,
    });
  }
}
  
export default projectSaga;