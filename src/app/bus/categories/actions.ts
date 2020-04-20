// Types
import {
  Categories,
  CATEGORIES_FETCH_ASYNC,
  CATEGORIES_START_FETCHING,
  CATEGORIES_STOP_FETCHING,
  CategoriesActionTypes,
  CategoriesFillAction,
  Category,
  FILL_CATEGORIES,
  RESET_CATEGORY,
  SET_CURRENT_CATEGORY,
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

export function setCategory(category: Category): CategoriesActionTypes {
  return {
    type: SET_CURRENT_CATEGORY,
    payload: category,
  };
}

export function resetCategory(): CategoriesActionTypes {
  return {
    type: RESET_CATEGORY,
  };
}

// Async
export function fetchCategoriesAsync(): CategoriesActionTypes {
  return {
    type: CATEGORIES_FETCH_ASYNC,
  };
}
