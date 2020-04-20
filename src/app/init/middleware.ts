// Core
import { createLogger } from 'redux-logger';
import { Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

// History
import { history } from './history';

export const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: (action): string => (action.error ? 'firebrick' : 'deepskyblue'),
    prevState: (): string => '#1C5FAF',
    action: (): string => '#149945',
    nextState: (): string => '#A47104',
    error: (): string => '#ff0005',
  },
});

const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);

const middleware: Middleware[] = [sagaMiddleware, routerMiddleware];

const DEV = process.env.NODE_ENV === 'development';

if (DEV) {
  middleware.push(logger);
}

export { middleware, sagaMiddleware };
