// src/components/Widgets/Widget.js
import React from 'react';
import { Paper, Typography } from '@mui/material';

const Widget = ({ title, data }) => (
  <Paper style={{ padding: 20, margin: 20 }}>
    <Typography variant="h5">{title}</Typography>
    <Typography variant="h4">{data}</Typography>
  </Paper>
);

export default Widget;
