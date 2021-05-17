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
    backgroundColor: '#8cd4b7',
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
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Typography variant="h3">Your favorite online shop</Typography>
      <Typography variant="h5">let's buy</Typography>

      <Button variant="contained" size="large" color="primary">
        <Link className={classes.link} to="./shop">
          Got to shop
        </Link>
      </Button>
      <CssBaseline></CssBaseline>
    </Grid>
  );
};

export default Home;
