import { takeEvery, put } from 'redux-saga/effects';
import { callGetProject, callAddProject, callDelProject, callPutProject } from '../requests/projectRequest';
import { callGetProjectInfo, callPostBookmark, callGetBookmark, callDelBookmark } from '../requests/projectInfoRequest';

function* projectSaga() {
  yield takeEvery('GET_PROJECT', getProjectSaga);
  yield takeEvery('ADD_PROJECT', postProjectSaga);
  yield takeEvery('DEL_PROJECT', delProjectSaga);
  yield takeEvery('PUT_PROJECT', putProjectSaga);
  yield takeEvery('PROJECT_INFO', getProjectInfoSaga);
  yield takeEvery('POST_BOOKMARK', postBookmarkSaga);
  yield takeEvery('GET_BOOKMARK', getBookmarkSaga);
  yield takeEvery('DEL_BOOKMARK', delBookmarkSaga);
}
// use as a general get for the user's projects
function* getProjectSaga() {
  try {
      const getProject = yield callGetProject();
      yield put({
        type: 'SET_PROJECT',
        payload: getProject,
      });
    } catch (error) {
      yield put({
        type: 'GET_PROJECT_REQUEST_FAILED',
        message: error.data,
      });
    }
}
// used for project specific page to return only information per project
function* getProjectInfoSaga(action) {
  try {
      const getProjectInfo = yield callGetProjectInfo(action);
      yield put({
        type: 'SET_PROJECTINFO',
        payload: getProjectInfo,
      });
    } catch (error) {
      yield put({
        type: 'GET_PROJECT-INFO_REQUEST_FAILED',
        message: error.data,
      });
    }
}

function* postProjectSaga(action) {
  try {
      yield callAddProject(action);
      yield put({
        type: 'GET_PROJECT',
      });
    } catch (error) {
      yield put({
        type: 'POST_PROJECT_REQUEST_FAILED',
        message: error.data,
      });
    }
}

function* postBookmarkSaga(action) {  
  try {
      yield callPostBookmark(action);
      yield put({
        type: 'GET_BOOKMARK',
        payload: action.payload
      });
    } catch (error) {
      yield put({
        type: 'POST_BOOKMARK_REQUEST_FAILED',
        message: error.data,
      });
    }
}

function* getBookmarkSaga(action) {
  try {
    const getBookmark = yield callGetBookmark(action.payload);
    yield put({
      type: 'SET_BOOKMARK',
      payload: getBookmark,
    });
  } catch (error) {
    yield put({
      type: 'GET_BOOKMARK_REQUEST_FAILED',
      message: error.data,
    });
  }
}

function* delBookmarkSaga(action) {
  console.log('fired delbookmark');
  try {
    yield callDelBookmark(action);
    yield put({
      type: 'GET_BOOKMARK',
      payload: action.payload      
    });
  } catch (error) {
    yield put({
      type: 'DEL_BOOKMARK_REQUEST_FAILED',
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
        type: 'PUT_PROJECT_REQUEST_FAILED',
        message: error.data,
      });
    }
}

function* delProjectSaga(action) {
  try {
    yield callDelProject(action);
    yield put({
      type: 'GET_PROJECT',
    });
  } catch (error) {
    yield put({
      type: 'DEL_PROJECT_REQUEST_FAILED',
      message: error.data,
    });
  }
}
  
export default projectSaga;