import { Product } from '../feed/types';

export type Basket = {
  products: Product[];
  count: number;
  sum: number;
};

// Sync
export const ADD_PRODUCT = 'ADD_PRODUCT';
type AddProductAction = {
  type: typeof ADD_PRODUCT;
  payload: Product;
};

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT;
  payload: Product;
};

export const BASKET_START_FETCHING = 'BASKET_START_FETCHING';
type BasketStartFetching = {
  type: typeof BASKET_START_FETCHING;
};

export const BASKET_STOP_FETCHING = 'BASKET_STOP_FETCHING';
type BasketStopFetching = {
  type: typeof BASKET_STOP_FETCHING;
};

export const BASKET_CLEAR = 'BASKET_CLEAR';
type BasketClearAction = {
  type: typeof BASKET_CLEAR;
};

export type BasketActionTypes =
  | AddProductAction
  | RemoveProductAction
  | BasketStartFetching
  | BasketClearAction
  | BasketStopFetching;
