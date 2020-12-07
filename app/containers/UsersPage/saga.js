import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_USERS } from 'containers/App/constants';
import { usersLoaded, usersLoadingError } from 'containers/App/actions';

export function* getUsers() {
  try {
    const users = yield call(() =>
      fetch(`https://5fca3e863c1c220016441fcc.mockapi.io/api/v1/users`)
        .then(response => response.json())
        .then(allUsers => allUsers),
    );
    yield put(usersLoaded(users));
  } catch (err) {
    yield put(usersLoadingError(err));
  }
}

export default function* usersData() {
  yield takeLatest(LOAD_USERS, getUsers);
}
