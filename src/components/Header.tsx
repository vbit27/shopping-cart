import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const { cart } = useContext(CartContext)!;

  const classes = useStyles();

  const itemTotal = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h5"
            className={classes.title}
            component={Link}
            to="/"
          >
            Buy Things
          </Typography>
          <Button color="inherit" component={Link} to="/shop">
            Shop
          </Button>
          <Button color="inherit" component={Link} to="/cart">
            Cart
          </Button>
          <Typography variant="body2" component="p">
            {itemTotal}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
