// Core
import { useDispatch } from 'react-redux';

// Types
import { Category } from '../../../bus/categories/type';

// Actions
import { filterProducts } from '../../../bus/feed/actions';

type HookUseCategoriesTileType = (
  category: Category,
) => {
  filterProds: () => void;
};

export const useCategoriesTile: HookUseCategoriesTileType = (category: Category) => {
  const dispatch = useDispatch();

  const filterProds = (): void => {
    dispatch(filterProducts(category));
  };
  return {
    filterProds,
  };
};
