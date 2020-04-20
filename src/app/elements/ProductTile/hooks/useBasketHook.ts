// Core
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../../bus/feed/types';
import {
  basketStartFetching,
  addProduct,
  removeProduct,
  basketStopFetching,
} from '../../../bus/basket/actions';
import { AppState } from '../../../init/rootReducer';
import { Basket } from '../../../bus/basket/types';

type HookUseBasketType = (
  data: Product,
) => {
  basket: Basket;
  addToBasket: () => void;
  removeFromBasket: () => void;
};

export const useBasketHook: HookUseBasketType = (data: Product) => {
  const dispatch = useDispatch();
  const basket = useSelector<AppState, Basket>((state) => state.basket.data);

  const addToBasket = (): void => {
    dispatch(basketStartFetching());
    dispatch(addProduct(data));
    dispatch(basketStopFetching());
  };

  const removeFromBasket = (): void => {
    dispatch(basketStartFetching());
    dispatch(removeProduct(data));
    dispatch(basketStopFetching());
  };

  return {
    basket,
    addToBasket,
    removeFromBasket,
  };
};
