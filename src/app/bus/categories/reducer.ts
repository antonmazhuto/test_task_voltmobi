// Types
import {
  Categories,
  CATEGORIES_FETCH_ASYNC,
  CATEGORIES_START_FETCHING,
  CATEGORIES_STOP_FETCHING,
  CategoriesActionTypes,
  FILL_CATEGORIES,
  RESET_CATEGORY,
  SET_CURRENT_CATEGORY,
} from './type';

export type CategoriesState = {
  currentCategory: number | null;
  data: Categories;
  isFetching: boolean;
};

const initialState: CategoriesState = {
  currentCategory: null,
  data: {
    results: [],
  },
  isFetching: false,
};

export const categoriesReducer = (
  state = initialState,
  action: CategoriesActionTypes,
): CategoriesState => {
  switch (action.type) {
    case CATEGORIES_START_FETCHING:
      return { ...state, isFetching: true };

    case CATEGORIES_STOP_FETCHING:
      return { ...state, isFetching: false };

    case FILL_CATEGORIES:
      return {
        ...state,
        data: {
          ...action.payload,
        },
      };

    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload.id,
      };

    case RESET_CATEGORY:
      return {
        ...state,
        currentCategory: null,
      };

    case CATEGORIES_FETCH_ASYNC:
      return state;

    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }

  return state;
};
