import { CartContext } from '../CartContext';
import React, { FC, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import './Cart.css';

const useStyles = makeStyles({
  root: {
    maxWidth: '200',
  },
  container: {
    marginTop: '10vh',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  purchase: {
    width: 'fit-content',
    padding: '0.5rem 2rem',
    margin: '2rem auto',
  },
});

const Cart: FC = () => {
  const { cart, setCart } = useContext(CartContext)!;

  const filterSelection = (key: string) => {
    const selected = items.filter((x) => x.id === key);

    return selected[0];
  };

  const handleIncrement = (key: string) => {
    const updatedCart = Object.assign({}, cart);

    updatedCart[key] += 1;

    setCart(updatedCart);
  };

  const handleDecrement = (key: string) => {
    const updatedCart = Object.assign({}, cart);

    if (updatedCart[key] > 1) {
      updatedCart[key] -= 1;

      setCart(updatedCart);
    }
  };

  const handleRemove = (key: string) => {
    const updatedCart = Object.assign({}, cart);
    delete updatedCart[key];

    setCart(updatedCart);
  };

  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      xs={11}
      sm={9}
      lg={6}
      className={classes.container}
    >
      {Object.entries(cart).map(([key, quantity], i) => (
        <div className="item-container">
          <img src={`/images/${key}.jpg`} alt="hi" />
          <div>
            <h3>{filterSelection(key).name} </h3>
          </div>
          <div>{quantity} kg</div>
          <div>{filterSelection(key).price * quantity} €</div>
          <div>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              onClick={() => handleIncrement(key)}
            >
              +
            </Button>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              onClick={() => handleDecrement(key)}
            >
              -
            </Button>
            <Button
              size="small"
              color="secondary"
              onClick={() => handleRemove(key)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}

      <Button
        className={classes.purchase}
        variant="contained"
        color="secondary"
      >
        Purchase
      </Button>
    </Grid>
  );
};

const items = [
  { name: 'Watermelon', image: '/images/item1.jpg', id: '101', price: 50 },
  { name: 'Ananas', image: '/images/item2.jpg', id: '102', price: 60 },
  { name: 'Grapes', image: '/images/item3.jpg', id: '103', price: 70 },
  { name: 'Lemon', image: '/images/item4.jpg', id: '104', price: 50 },
  { name: 'Cherries', image: '/images/item5.jpg', id: '105', price: 50 },
  { name: 'Paprika', image: '/images/item6.jpg', id: '106', price: 90 },
];

export default Cart;
