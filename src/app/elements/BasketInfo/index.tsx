// Core
import React, { FC, ReactElement } from 'react';

// Hooks
import { useBasketInfo } from './hooks/useBasketInfo';

// Instruments
import Styles from './styles.module.css';

type PropTypes = {
  children?: never;
};

export const BasketInfo: FC<PropTypes> = (): ReactElement => {
  const { basketSum, basketCount, clearBasket } = useBasketInfo();
  return (
    <>
      <section className={Styles.info}>
        <span>
          Общая сумма:
          {basketSum}
        </span>
        <span>
          Общее количество товаров:
          {basketCount}
        </span>
      </section>
      {basketCount > 0 && (
        <button type="button" onClick={clearBasket}>
          Очистить корзину
        </button>
      )}
    </>
  );
};
