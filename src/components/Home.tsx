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
    backgroundColor: '#8cd4b7',
  },
  grid: {
    width: '900',
  },
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
      <Grid className={classes.grid}>
        <Typography variant="h3">Your Online Grocery Shop</Typography>
        <Typography variant="h5">fresh and organic</Typography>
        <Button variant="contained" size="large" color="primary">
          <Link className={classes.link} to="./shop">
            Shop Now
          </Link>
        </Button>
      </Grid>
      <Grid className={classes.grid}>
        <Paper variant="outlined">
          <img src="../images/background1.jpg" alt="background" />
        </Paper>{' '}
      </Grid>
      <CssBaseline></CssBaseline>
    </Grid>
  );
};

export default Home;
