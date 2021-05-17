import { Grid } from '@material-ui/core';
import React, { FC } from 'react';
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
    minWidth: 200,
    margin: 20,
    padding: 20,
  },
  container: {
    marginTop: '10vh',
    width: '80vw',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  media: {
    height: 200,
  },
});

const Cards: FC<CardsProp> = (props) => {
  const classes = useStyles();

  const handleIncrement = (index: string) => {
    props.incrementQuantity(index);
  };

  const handleDecrement = (index: string) => {
    props.decrementQuantity(index);
  };

  const handleAddToCart = (index: string) => {
    props.addToCart(index);
  };

  return (
    <Grid container spacing={1} className={classes.container}>
      {props.items.map((item: Items) => (
        <Grid key={item.id} item xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Cucumber
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="h5" component="p">
                {props.quantity[item.id as keyof Quantity]}
              </Typography>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleIncrement(item.id)}
              >
                +
              </Button>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleDecrement(item.id)}
              >
                -
              </Button>
            </CardActions>
            <CardActions>
              <Button
                variant="contained"
                size="large"
                color="primary"
                onClick={() => handleAddToCart(item.id)}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

interface CardsProp {
  items: Items[];
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  addToCart: (id: string) => void;
  quantity: Quantity;
}

interface Items {
  name: string;
  image: string;
  id: string;
  price: number;
}

interface Quantity {
  '101': number;
  '102': number;
  '103': number;
  '104': number;
  '105': number;
  '106': number;
}

export default Cards;
