// Types
import {
  Categories,
  FILL_CATEGORIES,
  CATEGORIES_FETCH_ASYNC,
  CATEGORIES_START_FETCHING,
  CATEGORIES_STOP_FETCHING,
  CategoriesActionTypes,
  CategoriesFillAction,
} from './type';

// Sync
export function startFetching(): CategoriesActionTypes {
  return {
    type: CATEGORIES_START_FETCHING,
  };
}

export function stopFetching(): CategoriesActionTypes {
  return {
    type: CATEGORIES_STOP_FETCHING,
  };
}

export function fillCategories(categories: Categories): CategoriesFillAction {
  return {
    type: FILL_CATEGORIES,
    payload: categories,
  };
}

// Async
export function fetchCategoriesAsync(): CategoriesActionTypes {
  return {
    type: CATEGORIES_FETCH_ASYNC,
  };
}
