import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ButtonAppBar from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';

const Routes = () => {
  return (
    <BrowserRouter>
      <ButtonAppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
