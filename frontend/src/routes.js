import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Detail from './components/Detail';

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/show/:id" component={Detail} />
    </Router>
  );
}
