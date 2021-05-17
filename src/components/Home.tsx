import {
  Button,
  CssBaseline,
  Grid,
  makeStyles,
  Paper,
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
  grid: {},
  image: {
    backgroundImage: '../images/101.jpg',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
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
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h3">Your Online Grocery Shop</Typography>
        <Typography variant="h5">fresh and organic</Typography>
        <Button variant="contained" size="large" color="primary">
          <Link className={classes.link} to="./shop">
            Shop Now
          </Link>
        </Button>
      </Grid>

      <CssBaseline></CssBaseline>
    </Grid>
  );
};

export default Home;
