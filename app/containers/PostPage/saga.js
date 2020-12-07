import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_CURRENT_POST } from 'containers/App/constants';
import { currentPostLoaded, dataLoadingError } from 'containers/App/actions';

function* getPost(action) {
  try {
    const currentPost = yield call(fetchPost, action.userId, action.postId);
    yield put(currentPostLoaded(currentPost));
  } catch (err) {
    yield put(dataLoadingError(err));
  }
}

export default function* userData() {
  yield takeLatest(LOAD_CURRENT_POST, getPost);
}

// eslint-disable-next-line consistent-return
function fetchPost(userId, postId) {
  try {
    const result = fetch(
      `https://5fca3e863c1c220016441fcc.mockapi.io/api/v1/users/${userId}/posts/${postId}`,
    )
      .then(response => response.json())
      .then(posts => posts);

    return result;
  } catch (e) {
    console.error(e);
  }
}
