// Core
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { push } from 'connected-react-router';
import { reset } from 'redux-form';
import { fillOrder, orderStartFetching, orderStopFetching } from '../../../bus/order/actions';

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
    // eslint-disable-next-line no-alert
    alert('Заказ успешно оформлен!');

    setTimeout(() => {
      dispatch(orderStopFetching());
      dispatch(reset('order'));
      dispatch(push('/'));
    }, 500);
  };

  const basket = useSelector<AppState, Basket>((state) => state.basket.data);
  const order = useSelector<AppState, Order>((state) => state.order.data);
  const isFetching = useSelector<AppState, boolean>((state) => state.order.isFetching);
  order.products = basket.products;

  const clearOrder = (): void => {
    dispatch(reset('order'));
  };

  return {
    order,
    isFetching,
    submit,
    clearOrder,
  };
};
