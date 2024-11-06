// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6" noWrap>
        Advanced Dashboard
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
