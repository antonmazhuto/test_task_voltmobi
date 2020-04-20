// Core
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

// Routes
import { routes } from '../../../routes/routes';

type HookUseNavType = () => {
  navigateToRoot: () => void;
  navigateToBasket: () => void;
};

export const useNav: HookUseNavType = () => {
  const dispatch = useDispatch();

  const navigateToRoot = (): void => {
    dispatch(push(routes.root));
  };

  const navigateToBasket = (): void => {
    dispatch(push(routes.basket));
  };

  return {
    navigateToRoot,
    navigateToBasket,
  };
};
