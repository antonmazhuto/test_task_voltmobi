// Types
import {
  FEED_FETCH_PRODUCTS_ASYNC,
  FEED_FILL_PRODUCTS,
  FEED_FILTER_PRODUCTS,
  FEED_START_FETCHING,
  FEED_STOP_FETCHING,
  FeedActionTypes,
  Products,
} from './types';

export type FeedState = {
  data: Products;
  isFetching: boolean;
};

const initialState: FeedState = {
  data: {
    results: [],
  },
  isFetching: false,
};

export const feedReducer = (state = initialState, action: FeedActionTypes): FeedState => {
  switch (action.type) {
    case FEED_START_FETCHING:
      return { ...state, isFetching: true };

    case FEED_STOP_FETCHING:
      return { ...state, isFetching: false };

    case FEED_FILL_PRODUCTS:
      return {
        ...state,
        data: {
          ...action.payload,
        },
      };

    case FEED_FETCH_PRODUCTS_ASYNC:
      return state;

    case FEED_FILTER_PRODUCTS:
      return {
        ...state,
        data: {
          results: state.data.results.filter((r) => r.categories.includes(action.payload.id)),
        },
      };

    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }
  return state;
};
