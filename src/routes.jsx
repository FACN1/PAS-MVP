import React from 'react';
import { Route, browserHistory, Switch } from 'react-router-dom';
import Counter from './components/counter.jsx';

const Routes = () =>
  (
    <Switch>
      <Route exact path='/' component={Counter} history={browserHistory} />
      <Route exact path='/*' component={Counter} history={browserHistory} />
    </Switch>
  );

export default Routes;
