import React from 'react';
import { Route, Switch } from 'react-router-dom'
import About from './components/about';

const App = () => {
  return (
    <Switch>
      <Route exact path="/">{About}</Route>
    </Switch>
  );
}

export default App;