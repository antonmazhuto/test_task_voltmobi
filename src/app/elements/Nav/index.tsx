// Core
import React, { FC, ReactElement } from 'react';

// hooks
import { useNav } from './hooks/useNav';
import { useBasket } from './hooks/useBasket';

// Instruments
import { routes } from '../../routes/routes';

// Styles
import Styles from './styles.module.css';

type PropTypes = {
  location: {
    pathname: string;
  };
  children?: never;
};

export const Nav: FC<PropTypes> = (props: PropTypes): ReactElement => {
  const { navigateToRoot, navigateToBasket } = useNav();
  const { basket } = useBasket();
  const {
    location: { pathname },
  } = props;
  return (
    <section className={Styles.nav}>
      <div className="menu">
        {pathname === routes.root ? null : (
          <button type="button" onClick={navigateToRoot}>
            Главная
          </button>
        )}
      </div>
      <div className="cart">
        <button type="button" onClick={navigateToBasket}>
          Корзина
        </button>
        <div style={{ color: 'white' }}>
          <span>
            Товаров:
            {basket.count}
          </span>
          <span>
            Сумма:
            {basket.sum}
          </span>
        </div>
      </div>
    </section>
  );
};
