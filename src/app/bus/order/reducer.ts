// Types
import {
  Order,
  ORDER_FILL,
  ORDER_START_FETCHING,
  ORDER_STOP_FETCHING,
  OrderActionTypes,
} from './types';

export type OrderState = {
  data: Order;
  isFetching: boolean;
};

const initialState: OrderState = {
  data: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    products: [],
  },
  isFetching: false,
};

export const orderReducer = (state = initialState, action: OrderActionTypes): OrderState => {
  switch (action.type) {
    case ORDER_FILL:
      return {
        ...state,
        data: {
          ...action.payload,
        },
      };
    case ORDER_START_FETCHING:
      return { ...state, isFetching: true };
    case ORDER_STOP_FETCHING:
      return { ...state, isFetching: false };
    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }
  return state;
};
