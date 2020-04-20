// Core
import React, { FC, ReactElement } from 'react';

// Hooks
import { useMain } from './hooks/useMain';

// Instruments
import Styles from './styles.module.css';
import { ProductTile } from '../ProductTile';
import { Categories } from '../Categories';

type PropTypes = {
  children?: never;
};

export const Main: FC<PropTypes> = (): ReactElement => {
  const { products, isFetching } = useMain();

  const productsExist = products.results.length > 0 ? (
    products.results.map((product) => <ProductTile key={product.id} product={product} />)
  ) : (
    <section className={Styles.main}>Товаров нет</section>
  );

  const productsJSX = isFetching ? <div>Подождите, идет загрузка...</div> : productsExist;

  return (
    <section className={Styles.main}>
      <h1>Список товаров</h1>
      <Categories />
      <ul>{productsJSX}</ul>
    </section>
  );
};
