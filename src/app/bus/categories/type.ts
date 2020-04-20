export type Category = {
  id: number;
  title: string;
};

export type Categories = {
  results: Category[];
};

// Sync
export const CATEGORIES_START_FETCHING = 'CATEGORIES_START_FETCHING';
type CategoriesStartFetchingAction = {
  type: typeof CATEGORIES_START_FETCHING;
};

export const CATEGORIES_STOP_FETCHING = 'CATEGORIES_STOP_FETCHING';
type CategoriesStopFetchingAction = {
  type: typeof CATEGORIES_STOP_FETCHING;
};

export const FILL_CATEGORIES = 'FILL_CATEGORIES';
export type CategoriesFillAction = {
  type: typeof FILL_CATEGORIES;
  payload: Categories;
};

// Async
export const CATEGORIES_FETCH_ASYNC = 'CATEGORIES_FETCH_ASYNC';
type CategoriesFetchAsyncAction = {
  type: typeof CATEGORIES_FETCH_ASYNC;
};

export type CategoriesActionTypes =
  | CategoriesStartFetchingAction
  | CategoriesFillAction
  | CategoriesStopFetchingAction
  | CategoriesFetchAsyncAction;
