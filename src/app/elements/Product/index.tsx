// Core
import React, { FC, ReactElement } from 'react';

// Hooks
import { useProduct } from './hooks/useProduct';

// Styles
import Styles from './styles.module.css';

type PropTypes = {
  children?: never;
};

export const Product: FC<PropTypes> = (): ReactElement => {
  const {
    product, productAdd, productRemove, basket,
  } = useProduct();

  const buttonJSX = product && basket.products.findIndex((p) => p.id === product.id) >= 0 ? (
    <button type="button" onClick={productRemove}>
      Убрать из корзины
    </button>
  ) : (
    <button type="button" onClick={productAdd}>
      В корзину
    </button>
  );

  const productJSX = product && (
    <div className={Styles.description}>
      <div>
        <span>Имя:</span>
        <span>
          &nbsp;
          {product.name}
        </span>
      </div>
      <div>
        <span>Описание:</span>
        <span>
          &nbsp;
          {product.descr}
        </span>
      </div>
      <div>
        <span>Стоимость:</span>
        <span>
          &nbsp;
          {product.cost}
        </span>
      </div>
    </div>
  );

  return (
    <section className={Styles.product}>
      <h1>Карточка товара</h1>
      {productJSX}
      {product && buttonJSX}
    </section>
  );
};
