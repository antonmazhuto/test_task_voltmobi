// Core
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';

// Reducers
import { feedReducer as feed } from '../bus/feed/reducer';
import { basketReducer as basket } from '../bus/basket/reducer';
import { orderReducer as order } from '../bus/order/reducer';
import { categoriesReducer as categories } from '../bus/categories/reducer';

// Instruments
import { history } from './history';

const router = connectRouter(history);

export const rootReducer = combineReducers({
  feed,
  categories,
  basket,
  order,
  router,
  form,
});

export type AppState = ReturnType<typeof rootReducer>;
