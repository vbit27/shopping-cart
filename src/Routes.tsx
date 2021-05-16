import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import { CartContext } from './CartContext';

const Routes = () => {
  const [cart, setCart] = useState<CartObject>({});

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart, setCart }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

interface CartObject {
  [key: string]: number;
}

export default Routes;
