// Core
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

// Routes
import { routes } from '../../../routes/routes';

type HookUseProductTileType = (
  name: string,
) => {
  navigateToProduct: () => void;
};

export const useProductTile: HookUseProductTileType = (name: string) => {
  const dispatch = useDispatch();

  const navigateToProduct = (): void => {
    const url = `${routes.root}/${name.replace(/ /g, '-').toLowerCase()}`;
    dispatch(push(url));
  };

  return {
    navigateToProduct,
  };
};
