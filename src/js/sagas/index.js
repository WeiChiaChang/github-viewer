// import { delay } from 'redux-saga';
import { put, all, call, takeLatest } from 'redux-saga/effects';
// import { receiveResults } from '../actions/index.js';
import { LOAD_USER_REQUEST, LOAD_USER_SUCCESS } from '../constants/action-types';
import GITHUB_API from '../utils/api';

// GitHub API
const gitHubApi = (username) => {
  return fetch(`${GITHUB_API}${username}`)
    .then(response => {
      return response.json()
        .then(({ login, avatar_url, html_url }) =>  ({ login, avatar_url, html_url }));
    })
    .catch(error => {
      throw error;
    })
};

function* loadUserDetails({ payload }) {
  try {
    const user = yield call(gitHubApi, payload); // Make Api call to Github api with the username
    yield put({type: LOAD_USER_SUCCESS, user}); // Yields effect to the reducer specifying the action type and optional parameter
  } catch (error) {
    throw error;
  }
}

// Watches for LOAD_USER_REQUEST action and call loadUserDetails with supplied arguments
function* watchRequest() {
  yield takeLatest(LOAD_USER_REQUEST, loadUserDetails);
}

export default function* rootSaga() {
  yield all([
    watchRequest(),
  ])
}