// Core
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { addProduct, removeProduct } from '../../../bus/basket/actions';

// Types
import { AppState } from '../../../init/rootReducer';
import { Products, Product } from '../../../bus/feed/types';
import { Basket } from '../../../bus/basket/types';

type HookUseProductType = () => {
  product: Product | null;
  basket: Basket;
  productAdd: () => void;
  productRemove: () => void;
};

export const useProduct: HookUseProductType = () => {
  const dispatch = useDispatch();

  const products = useSelector<AppState, Products>((state) => state.feed.data);
  const basket = useSelector<AppState, Basket>((state) => state.basket.data);
  const { product: productName } = useParams();

  const product = products.results
    && products.results.find((item) => item.name.replace(/ /g, '-').toLowerCase() === productName);

  const productAdd = (): void => {
    if (product) dispatch(addProduct(product));
  };

  const productRemove = (): void => {
    if (product) dispatch(removeProduct(product));
  };

  return {
    product: product || null,
    basket,
    productAdd,
    productRemove,
  };
};
