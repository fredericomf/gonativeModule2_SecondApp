import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';

import api from '~/services/api';

import * as LoginActions from '../actions/login';

// STUDY_NOTE: Generator function. Similar to async/await

function* login(action) {
  try {
    const { username } = action.payload;

    yield call(api.get, `/users/${username}`);

    yield put(LoginActions.loginSuccess(username));

    // navigation.navigate('Repositories');
  } catch (error) {
    yield put(LoginActions.loginFailure());
  }
}

// Generators are used with saga becouse async/await is limited.
export default function* rootSaga() {
  return yield all([takeLatest('LOGIN_REQUEST', login)]);
}
