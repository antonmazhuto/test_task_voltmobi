// Core
import React, { FC, ReactElement } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import { Nav } from '../elements/Nav';
import { Main } from '../elements/Main';
import { Product } from '../elements/Product';
import { Basket } from '../elements/Basket';

// Routes
import { routes } from './routes';

type PropTypes = {
  children?: never;
};

export const Routes: FC<PropTypes> = (): ReactElement => (
  <>
    <Route component={Nav} path="/" />
    <Switch>
      <Route exact component={Main} path={routes.root} />
      <Route component={Product} path={routes.product} />
      <Route exact component={Basket} path={routes.basket} />
      <Redirect to={routes.root} />
    </Switch>
  </>
);
