import React from 'react';
import { Route, browserHistory, Switch } from 'react-router-dom';

import SelectGuesthouse from './containers/select_guesthouse.jsx';
import TravelMethod from './containers/travel_method.jsx';
import MapRoute from './containers/map_route.jsx';


const Routes = () =>
  (
    <Switch>
      <Route exact path='/method' component={TravelMethod} history={browserHistory} />
      <Route exact path='/map' component={MapRoute} history={browserHistory} />
      <Route exact path='/' component={SelectGuesthouse} history={browserHistory} />
      <Route path='/*' component={SelectGuesthouse} history={browserHistory} />
    </Switch>
  );

export default Routes;
