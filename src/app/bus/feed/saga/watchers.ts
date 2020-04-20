// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { FEED_FETCH_PRODUCTS_ASYNC } from '../types';

// Workers
import { fetchProducts } from './workers';

function* watchFetchProducts(): SagaIterator {
  yield takeEvery(FEED_FETCH_PRODUCTS_ASYNC, fetchProducts);
}

export function* watchFeed(): SagaIterator {
  yield all([call(watchFetchProducts)]);
}
