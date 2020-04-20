// Core
import { useDispatch, useSelector } from 'react-redux';

// Types
import { Category } from '../../../bus/categories/type';
import { AppState } from '../../../init/rootReducer';

// Actions
import { filterProducts } from '../../../bus/feed/actions';
import { setCategory } from '../../../bus/categories/actions';

type HookUseCategoriesTileType = (
  category: Category,
) => {
  currentCategory: number | null;
  filterProds: () => void;
  setCurrentCategory: () => void;
};

export const useCategoriesTile: HookUseCategoriesTileType = (category: Category) => {
  const dispatch = useDispatch();

  const currentCategory = useSelector<AppState, number | null>(
    (state) => state.categories.currentCategory,
  );

  const filterProds = (): void => {
    dispatch(filterProducts(category));
  };
  const setCurrentCategory = (): void => {
    dispatch(setCategory(category));
  };
  return {
    currentCategory,
    filterProds,
    setCurrentCategory,
  };
};
