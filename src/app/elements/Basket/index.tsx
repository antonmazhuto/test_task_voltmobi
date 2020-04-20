// Core
import React, { FC, ReactElement } from 'react';

// Hooks
import { useBasket } from './hooks/useBasket';

// Instruments
import Styles from './styles.module.css';
import { ProductTile } from '../ProductTile';
import { BasketInfo } from '../BasketInfo';
import { Order } from '../Order';

type PropTypes = {
  children?: never;
};

export const Basket: FC<PropTypes> = (): ReactElement => {
  const { basket } = useBasket();

  const cartItems = basket.products.length > 0 ? (
    basket.products.map((product) => (
      <>
        <ProductTile key={product.id} product={product} />
        <Order />
      </>
    ))
  ) : (
    <div>Товаров нет в корзине...</div>
  );
  return (
    <section className={Styles.basket}>
      <h1>Корзина</h1>
      <BasketInfo />
      <ul>{cartItems}</ul>
    </section>
  );
};
