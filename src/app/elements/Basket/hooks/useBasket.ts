// Core
import { useSelector } from 'react-redux';

// Types
import { AppState } from '../../../init/rootReducer';
import { Basket } from '../../../bus/basket/types';

type HookUseBasket = () => {
  basket: Basket;
};

export const useBasket: HookUseBasket = () => {
  const basket = useSelector<AppState, Basket>((state) => state.basket.data);

  return {
    basket,
  };
};
