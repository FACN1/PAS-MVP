import React from 'react';
import { Route, browserHistory } from 'react-router-dom';
import App from './app.jsx';

const Routes = () => <Route exact path='/' component={App} history={browserHistory} />;

export default Routes;
