// Types
import {
  Order,
  ORDER_FILL,
  ORDER_START_FETCHING,
  ORDER_STOP_FETCHING,
  OrderActionTypes,
} from './types';

// Sync
export function fillOrder(order: Order): OrderActionTypes {
  return {
    type: ORDER_FILL,
    payload: order,
  };
}

export function orderStartFetching(): OrderActionTypes {
  return {
    type: ORDER_START_FETCHING,
  };
}

export function orderStopFetching(): OrderActionTypes {
  return {
    type: ORDER_STOP_FETCHING,
  };
}
