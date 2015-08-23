import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from './components/app.jsx';
import Issue from './components/issue.jsx';
import Login from './components/Login.jsx';

var routes = (
  <Route name="app" path="/" handler={ App }>
    <Route name='login' path='/login' handler={ Login } />
    <Route name="issue" path="/:issue_id" handler={ Issue } />
  </Route>
);

export default routes;
