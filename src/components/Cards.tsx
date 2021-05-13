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
  media: {
    height: 200,
  },
});

const Cards: FC<CardsProp> = (props) => {
  const classes = useStyles();

  const handleIncrement = (index: number) => {
    props.incrementQuantity(index);
  };

  return (
    <Grid container>
      {props.items.map((item: Items) => (
        <Grid item xs={12} sm={6} md={4}>
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
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => handleIncrement(item.id)}
              >
                +
              </Button>
              <Button variant="outlined" size="small" color="primary">
                -
              </Button>
            </CardActions>
            <CardActions>
              <Button variant="contained" size="large" color="primary">
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
  incrementQuantity: (id: number) => void;
}

interface Items {
  name: string;
  image: string;
  id: number;
  price: number;
  quantity: number;
}

export default Cards;
