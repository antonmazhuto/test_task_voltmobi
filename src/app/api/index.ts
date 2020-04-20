import { root } from './config';
import { Products } from '../bus/feed/types';
import { Categories } from '../bus/categories/type';

// const returnGenValue = function<T> (arg: T): T {
//   return arg;
// };

export type FetchDataType<T> = () => Promise<T>;

type APIFetchDataType = {
  products: {
    fetch: FetchDataType<Products>;
  };
  categories: {
    fetch: FetchDataType<Categories>;
  };
};

export const api: APIFetchDataType = {
  products: {
    fetch: (): Promise<Products> => fetch(`${root}/5e982fa93500007f00c47f6c`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((results) => ({ results })),
  },
  categories: {
    fetch: (): Promise<Categories> => fetch(`${root}/5e982f9c3500007a00c47f6b`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((results) => ({ results })),
  },
};
