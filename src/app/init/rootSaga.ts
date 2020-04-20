// Core
import { all } from 'redux-saga/effects';

// Watchers
import { watchFeed } from '../bus/feed/saga/watchers';
import { watchCategories } from '../bus/categories/saga/watchers';

export function* rootSaga(): Generator {
  yield all([watchFeed(), watchCategories()]);
}
