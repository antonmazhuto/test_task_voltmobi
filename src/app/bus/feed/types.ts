import { Category } from '../categories/type';

export type Product = {
  id: number;
  name: string;
  descr: string;
  cost: number;
  categories: Array<number>;
};

export type Products = {
  results: Product[];
};

// Sync
export const FEED_START_FETCHING = 'FEED_START_FETCHING';
type FeedStartFetchingAction = {
  type: typeof FEED_START_FETCHING;
};

export const FEED_STOP_FETCHING = 'FEED_STOP_FETCHING';
type FeedStopFetchingAction = {
  type: typeof FEED_STOP_FETCHING;
};

export const FEED_FILL_PRODUCTS = 'FEED_FILL_PRODUCTS';
export type FeedFillProductsAction = {
  type: typeof FEED_FILL_PRODUCTS;
  payload: Products;
};

export const FEED_FILTER_PRODUCTS = 'FEED_FILTER_PRODUCTS';
export type FeedFilterProductsAction = {
  type: typeof FEED_FILTER_PRODUCTS;
  payload: Category;
};

// Async
export const FEED_FETCH_PRODUCTS_ASYNC = 'FEED_FETCH_PRODUCTS_ASYNC';
type FeedFetchProductsAsync = {
  type: typeof FEED_FETCH_PRODUCTS_ASYNC;
};

export type FeedActionTypes =
  | FeedStartFetchingAction
  | FeedStopFetchingAction
  | FeedFillProductsAction
  | FeedFilterProductsAction
  | FeedFetchProductsAsync;
