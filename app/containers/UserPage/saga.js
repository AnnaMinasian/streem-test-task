import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_POSTS, LOAD_CURRENT_USER } from 'containers/App/constants';
import {
  postsLoaded,
  currentUserLoaded,
  dataLoadingError,
} from 'containers/App/actions';

function* getPosts(action) {
  try {
    const posts = yield call(fetchPosts, action.userId);
    yield put(postsLoaded(posts));
  } catch (err) {
    yield put(dataLoadingError(err));
  }
}

function* getCurrentUser(action) {
  try {
    const currentUser = yield call(fetchCurrentUser, action.userId);
    yield put(currentUserLoaded(currentUser));
  } catch (err) {
    yield put(dataLoadingError(err));
  }
}

export default function* userData() {
  yield takeLatest(LOAD_CURRENT_USER, getCurrentUser);
  yield takeLatest(LOAD_POSTS, getPosts);
}

// eslint-disable-next-line consistent-return
function fetchCurrentUser(userId) {
  try {
    const result = fetch(
      `https://5fca3e863c1c220016441fcc.mockapi.io/api/v1/users/${userId}`,
    )
      .then(response => response.json())
      .then(user => user);

    return result;
  } catch (e) {
    console.error(e);
  }
}

// eslint-disable-next-line consistent-return
function fetchPosts(userId) {
  try {
    const result = fetch(
      `https://5fca3e863c1c220016441fcc.mockapi.io/api/v1/users/${userId}/posts`,
    )
      .then(response => response.json())
      .then(posts => posts);

    return result;
  } catch (e) {
    console.error(e);
  }
}
