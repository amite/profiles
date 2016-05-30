import  React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import App from './components/App';
import ProfileList from './components/ProfileList';

import './css/style.css';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ProfileList} />
    </Route>
  </Router>
  , document.getElementById('root')
);