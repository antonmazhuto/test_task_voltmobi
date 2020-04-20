// Types
import {
  FEED_FETCH_PRODUCTS_ASYNC,
  FEED_FILL_PRODUCTS,
  FEED_FILTER_PRODUCTS,
  FEED_START_FETCHING,
  FEED_STOP_FETCHING,
  FeedActionTypes,
  FeedFillProductsAction,
  FeedFilterProductsAction,
  Products,
} from './types';
import { Category } from '../categories/type';

// Sync
export function startFetching(): FeedActionTypes {
  return {
    type: FEED_START_FETCHING,
  };
}

export function stopFetching(): FeedActionTypes {
  return {
    type: FEED_STOP_FETCHING,
  };
}

export function fillProducts(products: Products): FeedFillProductsAction {
  return {
    type: FEED_FILL_PRODUCTS,
    payload: products,
  };
}

export function filterProducts(category: Category): FeedFilterProductsAction {
  return {
    type: FEED_FILTER_PRODUCTS,
    payload: category,
  };
}

// Async
export function fetchProductsAsync(): FeedActionTypes {
  return {
    type: FEED_FETCH_PRODUCTS_ASYNC,
  };
}
