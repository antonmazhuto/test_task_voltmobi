// Types
import {
  ADD_PRODUCT,
  Basket,
  BASKET_CLEAR,
  BASKET_START_FETCHING,
  BASKET_STOP_FETCHING,
  BasketActionTypes,
  REMOVE_PRODUCT,
} from './types';

export type BasketState = {
  data: Basket;
  isFetching: boolean;
};

const initialState: BasketState = {
  data: {
    products: [],
    count: 0,
    sum: 0,
  },
  isFetching: false,
};

export const basketReducer = (state = initialState, action: BasketActionTypes): BasketState => {
  switch (action.type) {
    case BASKET_START_FETCHING:
      return { ...state, isFetching: true };
    case ADD_PRODUCT:
      return {
        ...state,
        data: {
          products: [...state.data.products, action.payload],
          count: state.data.count + 1,
          sum: state.data.sum + action.payload.cost,
        },
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        data: {
          products: state.data.products.filter((p) => p.id !== action.payload.id),
          count: state.data.count - 1,
          sum: state.data.sum - action.payload.cost,
        },
      };
    case BASKET_STOP_FETCHING:
      return { ...state, isFetching: false };
    case BASKET_CLEAR:
      return {
        ...state,
        data: {
          products: [],
          count: 0,
          sum: 0,
        },
      };
    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }
  return state;
};
