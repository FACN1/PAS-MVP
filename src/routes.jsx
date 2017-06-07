import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SelectGuesthouse from './containers/select_guesthouse.jsx';
import TravelMethod from './containers/travel_method.jsx';
import MapRoute from './containers/map_route.jsx';
import WalkingDirections from './containers/walking_directions.jsx';
import Success from './containers/success.jsx';


const Routes = () =>
  (
    <Switch>
      <Route exact path='/method' component={TravelMethod} />
      <Route exact path='/map' component={MapRoute} />
      <Route exact path='/walking' component={WalkingDirections} />
      <Route exact path='/success' component={Success} />
      <Route exact path='/' component={SelectGuesthouse} />
      <Route path='/*' component={SelectGuesthouse} />
    </Switch>
  );

export default Routes;
