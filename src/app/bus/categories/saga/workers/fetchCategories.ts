// Actions
import { startFetching, fillCategories, stopFetching } from '../../actions';

// Types
import { Categories } from '../../type';

// Workers
import { makeRequestWithSpinner } from '../../../../workers';

// API
import { api } from '../../../../api';

export function* fetchCategories(): Generator {
  const options = {
    fetcher: api.categories.fetch,
    startFetching,
    stopFetching,
    fill: fillCategories,
  };
  yield makeRequestWithSpinner<Categories>(options);
}
