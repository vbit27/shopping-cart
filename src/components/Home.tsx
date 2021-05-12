import { Button } from '@material-ui/core';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  return (
    <Button
      size="large"
      variant="contained"
      color="primary"
      component={Link}
      to="/shop"
    >
      Shop
    </Button>
  );
};

export default Home;
