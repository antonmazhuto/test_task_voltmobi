// Actions
import { startFetching, fillProducts, stopFetching } from '../../actions';

// Types
import { Products } from '../../types';

// Workers
import { makeRequestWithSpinner } from '../../../../workers';

// Api
import { api } from '../../../../api';

export function* fetchProducts(): Generator {
  const options = {
    fetcher: api.products.fetch,
    startFetching,
    stopFetching,
    fill: fillProducts,
  };

  yield makeRequestWithSpinner<Products>(options);
}
