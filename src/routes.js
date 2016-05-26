import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ReleaseList from './containers/release_list';
import GameShow from './containers/game_show';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ReleaseList} />
    <Route path="game/:resourceId" component={GameShow} />
  </Route>
);