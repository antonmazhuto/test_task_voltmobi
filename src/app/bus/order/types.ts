import { Product } from '../feed/types';

export type Order = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  products: Product[];
};

// Sync
export const ORDER_FILL = 'ORDER_FILL';
type OrderFillAction = {
  type: typeof ORDER_FILL;
  payload: Order;
};

export const ORDER_START_FETCHING = 'ORDER_START_FETCHING';
type OrderStartFetchingAction = {
  type: typeof ORDER_START_FETCHING;
};

export const ORDER_STOP_FETCHING = 'ORDER_STOP_FETCHING';
type OrderStopFetchingAction = {
  type: typeof ORDER_STOP_FETCHING;
};

export const ORDER_CLEAR_FORM = 'ORDER_CLEAR_FORM';
type OrderClearFormAction = {
  type: typeof ORDER_CLEAR_FORM;
};

export type OrderActionTypes =
  | OrderFillAction
  | OrderStartFetchingAction
  | OrderStopFetchingAction
  | OrderClearFormAction;
