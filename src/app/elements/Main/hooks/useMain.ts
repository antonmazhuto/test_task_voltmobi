// Core
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { fetchProductsAsync } from '../../../bus/feed/actions';

// Types
import { AppState } from '../../../init/rootReducer';
import { Products } from '../../../bus/feed/types';

type HookUseMainType = () => {
  products: Products;
  isFetching: boolean;
};

export const useMain: HookUseMainType = () => {
  const dispatch = useDispatch();

  const products = useSelector<AppState, Products>((state) => state.feed.data);
  const filtered = useSelector<AppState, Products>((state) => state.feed.filtered);
  const isFetching = useSelector<AppState, boolean>((state) => state.feed.isFetching);
  const category = useSelector<AppState, number | null>(
    (state) => state.categories.currentCategory,
  );

  const finalProducts = category ? filtered : products;

  const fetchPostsAsync = (): void => {
    dispatch(fetchProductsAsync());
  };

  useEffect(() => {
    fetchPostsAsync();
  }, []);

  return {
    products: finalProducts,
    isFetching,
  };
};
