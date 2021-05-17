import {
  Button,
  CssBaseline,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: `url(${
      process.env.PUBLIC_URL + './images/background1.jpg'
    })`,

    backgroundColor: '#ffedd6',
  },
  image: {
    backgroundImage: '../images/101.jpg',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  title: {
    margin: '1rem',
  },
  resize: {
    fontSize: '5rem',
  },
}));

const Home: FC = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={12} sm={10} md={5}>
        <Typography
          className={classes.title}
          color="textSecondary"
          variant="h1"
        >
          Your Online Grocery Shop
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          variant="h5"
        >
          fresh and organic
        </Typography>
        <Button
          className={classes.title}
          variant="contained"
          size="large"
          color="secondary"
          component={Link}
          to="/shop"
        >
          Shop Now
        </Button>
      </Grid>

      <CssBaseline></CssBaseline>
    </Grid>
  );
};

export default Home;
