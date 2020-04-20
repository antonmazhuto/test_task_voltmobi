// Core
import { useSelector } from 'react-redux';

// Types
import { AppState } from '../../../init/rootReducer';
import { Basket } from '../../../bus/basket/types';

type HookUseBasketType = () => {
  basket: Basket;
};

export const useBasket: HookUseBasketType = () => {
  const basket = useSelector<AppState, Basket>((state) => state.basket.data);

  // const { sum: basketSum, count: basketCount } = basket && basket;

  return {
    basket,
  };
};
