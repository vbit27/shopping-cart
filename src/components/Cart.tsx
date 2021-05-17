import { CartContext } from '../CartContext';
import React, { FC, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: ' 350',
  },
  container: {
    marginTop: '10vh',
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
    <Grid container className={classes.container}>
      {Object.entries(cart).map(([key, quantity], i) => (
        <Grid key={key} item xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={`/images/${key}.jpg`}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {filterSelection(key).name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {quantity}
              </Typography>
              <Typography>{quantity * filterSelection(key).price} €</Typography>
            </CardContent>
            <CardActions>
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
                color="primary"
                onClick={() => handleRemove(key)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}

      <Button variant="contained" color="primary">
        Purchase
      </Button>
    </Grid>
  );
};

const items = [
  { name: 'Item 1', image: '/images/item1.jpg', id: '101', price: 50 },
  { name: 'Item 2', image: '/images/item2.jpg', id: '102', price: 60 },
  { name: 'Item 3', image: '/images/item3.jpg', id: '103', price: 70 },
  { name: 'Item 4', image: '/images/item4.jpg', id: '104', price: 50 },
  { name: 'Item 5', image: '/images/item5.jpg', id: '105', price: 50 },
  { name: 'Item 6', image: '/images/item6.jpg', id: '106', price: 90 },
];

export default Cart;
