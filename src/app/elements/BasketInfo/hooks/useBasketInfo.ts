// Core
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { basketClear } from '../../../bus/basket/actions';

// Types
import { AppState } from '../../../init/rootReducer';
import { Basket } from '../../../bus/basket/types';

type HookUseBasketInfoType = () => {
  basketSum: number;
  basketCount: number;
  clearBasket: () => void;
};

export const useBasketInfo: HookUseBasketInfoType = () => {
  const dispatch = useDispatch();

  const basket = useSelector<AppState, Basket>((state) => state.basket.data);

  const clearBasket = (): void => {
    dispatch(basketClear());
  };

  return {
    basketCount: basket.count,
    basketSum: basket.sum,
    clearBasket,
  };
};
