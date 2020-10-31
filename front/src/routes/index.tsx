import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Sizes, Crusts, Toppings, Confirmation } from '../pages';

export const RouteNames = {
  size: '/size',
  crust: '/crust',
  topping: '/topping',
  confirmation: '/confirmation',
};

const Routes = () => (
  <Router>
    <Switch>
      <Route path={RouteNames.size}>
        <Sizes />
      </Route>
      <Route path={RouteNames.crust}>
        <Crusts />
      </Route>
      <Route path={RouteNames.topping}>
        <Toppings />
      </Route>
      <Route path={RouteNames.confirmation}>
        <Confirmation />
      </Route>
      <Route path="*">
        <Redirect to={RouteNames.size} />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
