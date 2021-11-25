import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <Grid item xs={12} sm={4}>
      <Card sx={{ boxShadow: 1, border: 0 }}>
        <CardContent>
          <img src={img} alt="" />
          <Typography variant="h5" color="text.secondary" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;