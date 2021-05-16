import { CartContext } from '../CartContext';

import React, { FC, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Cart: FC = () => {
  const { cart, setCart } = useContext(CartContext)!;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
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
