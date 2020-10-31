import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Sizes, Crusts, Toppings, Confirmation } from '../pages';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/sizes">
        <Sizes />
      </Route>
      <Route path="/crusts">
        <Crusts />
      </Route>
      <Route path="/toppings">
        <Toppings />
      </Route>
      <Route path="/confirmation">
        <Confirmation />
      </Route>
      <Route path="*">
        <Redirect to="/sizes" />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
