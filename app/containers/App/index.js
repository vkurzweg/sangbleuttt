/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePageLondon from 'containers/HomePageLondon/Loadable';
import HomePageZurich from 'containers/HomePageZurich/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/london" component={HomePageLondon} />
        <Route exact path="/zurich" component={HomePageZurich} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
