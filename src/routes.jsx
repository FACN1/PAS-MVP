import React from 'react';
import { Route, browserHistory } from 'react-router-dom';
import App from './app.jsx';

const Routes = () =>
  (
    <div>
      <Route exact path='/' component={App} history={browserHistory} />
      <Route path='/*' component={App} history={browserHistory} />
    </div>
  );

export default Routes;
