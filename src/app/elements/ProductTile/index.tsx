// Core
import React, { FC, ReactElement } from 'react';

// Styles
import Styles from './styles.module.css';

// Types
import { Product } from '../../bus/feed/types';

// Hooks
import { useProductTile } from './hooks/useProductTile';
import { useBasketHook } from './hooks/useBasketHook';

type PropTypes = {
  children?: never;
  product: Product;
};

export const ProductTile: FC<PropTypes> = ({ product }: PropTypes): ReactElement => {
  const { name, descr, cost } = product;

  const { navigateToProduct } = useProductTile(name);

  const { addToBasket, removeFromBasket, basket } = useBasketHook(product);

  const buttonElement = basket.products.findIndex((p) => p.id === product.id) >= 0 ? (
    <button type="button" onClick={removeFromBasket}>
      Убрать из корзины
    </button>
  ) : (
    <button type="button" onClick={addToBasket}>
      В корзину
    </button>
  );

  return (
    <section className={Styles.productTile}>
      <div className={Styles.description}>
        <div>
          <span>Имя:</span>
          <span>
            &nbsp;
            {name}
          </span>
        </div>
        <div>
          <span>Описание:</span>
          <span>
            &nbsp;
            {descr}
          </span>
        </div>
        <div>
          <span>Стоимость:</span>
          <span>
            &nbsp;
            {cost}
          </span>
        </div>
        <button type="button" onClick={navigateToProduct}>
          Подробнее
        </button>
        {buttonElement}
      </div>
    </section>
  );
};
