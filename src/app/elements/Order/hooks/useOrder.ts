// Core
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { push } from 'connected-react-router';
import {
  fillOrder,
  orderStartFetching,
  orderStopFetching,
  orderClearForm,
} from '../../../bus/order/actions';

// Types
import { AppState } from '../../../init/rootReducer';
import { Order } from '../../../bus/order/types';
import { Basket } from '../../../bus/basket/types';

type HookUseProfileType = () => {
  order: Order;
  isFetching: boolean;
  submit: (values: Order) => void;
  clearOrder: () => void;
};

export const useOrder: HookUseProfileType = () => {
  const dispatch = useDispatch();

  const submit = (values: Order): void => {
    dispatch(orderStartFetching());
    dispatch(fillOrder(values));

    setTimeout(() => {
      alert('Заказ успешно оформлен!');
      dispatch(orderStopFetching());
    }, 500);
    dispatch(push('/'));
  };

  const basket = useSelector<AppState, Basket>((state) => state.basket.data);
  const order = useSelector<AppState, Order>((state) => state.order.data);
  const isFetching = useSelector<AppState, boolean>((state) => state.order.isFetching);
  order.products = basket.products;

  const clearOrder = (): void => {
    dispatch(orderClearForm());
  };

  return {
    order,
    isFetching,
    submit,
    clearOrder,
  };
};
