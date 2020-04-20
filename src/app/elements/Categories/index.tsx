// Core
import React, { FC, ReactElement } from 'react';

// Hooks
import { useCategories } from './hooks/useCategories';

// Instruments
import Styles from './styles.module.css';
import { CategoryTile } from '../CategoryTile';

type PropTypes = {
  children?: never;
};

export const Categories: FC<PropTypes> = (): ReactElement => {
  const { categories, resetCurrentCategory } = useCategories();

  const categoriesJSX = categories.results.map((category) => <CategoryTile category={category} />);

  return (
    <section className={Styles.categories}>
      {categoriesJSX}
      <button type="button" onClick={resetCurrentCategory}>
        &times;
      </button>
    </section>
  );
};
