// Core
import React, { FC, ReactElement } from 'react';

// Types
import { Category } from '../../bus/categories/type';

// Hooks
import { useCategoriesTile } from './hooks/useCategoriesTile';

// Styles
import Styles from './styles.module.css';

type PropTypes = {
  category: Category;
  children?: never;
};

export const CategoryTile: FC<PropTypes> = ({ category }: PropTypes): ReactElement => {
  const { id, title } = category;

  const { filterProds, setCurrentCategory, currentCategory } = useCategoriesTile(category);

  const handleClick = (): void => {
    filterProds();
    setCurrentCategory();
  };

  return (
    <button
      key={id}
      className={id === currentCategory ? Styles.active : ''}
      type="button"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};
