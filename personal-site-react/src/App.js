import React from 'react';
import { Route, Switch } from 'react-router-dom'
import MainPage from './components/mainPage';
import Technologies from './components/technologies';
import About from './components/about';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/about" component={About} />
      <Route path="/tech" component={Technologies} />
    </Switch>
  );
}

export default App;