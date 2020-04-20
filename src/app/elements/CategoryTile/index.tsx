// Core
import React, { FC, ReactElement } from 'react';

// Types
import { Category } from '../../bus/categories/type';

// Hooks
import { useCategoriesTile } from './hooks/useCategoriesTile';

type PropTypes = {
  category: Category;
  children?: never;
};

export const CategoryTile: FC<PropTypes> = ({ category }: PropTypes): ReactElement => {
  const { id, title } = category;

  const { filterProds } = useCategoriesTile(category);

  return (
    <button key={id} type="button" onClick={filterProds}>
      {title}
    </button>
  );
};
