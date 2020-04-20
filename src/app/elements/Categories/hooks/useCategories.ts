// Core
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { fetchCategoriesAsync } from '../../../bus/categories/actions';

// Types
import { AppState } from '../../../init/rootReducer';
import { Categories } from '../../../bus/categories/type';

type HookUseCategoriesType = () => {
  categories: Categories;
};

export const useCategories: HookUseCategoriesType = () => {
  const dispatch = useDispatch();

  const categories = useSelector<AppState, Categories>((state) => state.categories.data);

  const fetchCatAsync = (): void => {
    dispatch(fetchCategoriesAsync());
  };

  useEffect(() => {
    fetchCatAsync();
  }, []);

  return {
    categories,
  };
};
