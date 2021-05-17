import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { SiBower } from 'react-icons/si';
import { FiShoppingCart } from 'react-icons/fi';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white',
    fontSize: '2rem',
  },
  icon: {
    fontSize: '1.5rem',
  },
}));

export default function Header() {
  const { cart } = useContext(CartContext)!;

  const classes = useStyles();

  const itemTotal = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="fixed">
        <Toolbar>
          <Typography
            variant="h5"
            className={classes.title}
            component={Link}
            to="/"
          >
            <SiBower />
          </Typography>
          <Button color="inherit" component={Link} to="/shop">
            Shop
          </Button>
          <Button
            color="inherit"
            className={classes.icon}
            component={Link}
            to="/cart"
          >
            <FiShoppingCart />
          </Button>
          <Typography variant="body2" className={classes.icon} component="p">
            {itemTotal}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
