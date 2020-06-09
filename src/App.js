import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
      <Route exact path="/" component={Home} />
  )
}
export default App;
