import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/register';
import Profile from './pages/profile';
import Incidents from './pages/newIncident';

export default function Routes(params) {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={Incidents} />
      </Switch>
    </BrowserRouter>
  )
}