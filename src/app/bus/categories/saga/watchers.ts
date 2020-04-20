// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { CATEGORIES_FETCH_ASYNC } from '../type';

// Workers
import { fetchCategories } from './workers';

function* watchFetchCategories(): SagaIterator {
  yield takeEvery(CATEGORIES_FETCH_ASYNC, fetchCategories);
}

export function* watchCategories(): SagaIterator {
  yield all([call(watchFetchCategories)]);
}
