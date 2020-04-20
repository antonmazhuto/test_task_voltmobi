// Types
import {
  ADD_PRODUCT,
  BASKET_CLEAR,
  BASKET_START_FETCHING,
  BASKET_STOP_FETCHING,
  BasketActionTypes,
  REMOVE_PRODUCT,
} from './types';

import { Product } from '../feed/types';

//  Sync
export function addProduct(product: Product): BasketActionTypes {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
}

export function removeProduct(product: Product): BasketActionTypes {
  return {
    type: REMOVE_PRODUCT,
    payload: product,
  };
}

export function basketStartFetching(): BasketActionTypes {
  return {
    type: BASKET_START_FETCHING,
  };
}

export function basketStopFetching(): BasketActionTypes {
  return {
    type: BASKET_STOP_FETCHING,
  };
}

export function basketClear(): BasketActionTypes {
  return {
    type: BASKET_CLEAR,
  };
}
