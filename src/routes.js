import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ReleaseList from './components/release_list';
import GameShow from './components/game_show';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ReleaseList} />
    <Route path="game/:resourceId" component={GameShow} />
  </Route>
);