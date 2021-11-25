import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Testimonial = ({ testimonial }) => {
  const { name, address, img, description } = testimonial;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ boxShadow: 1, border: 0, p: 2, textAlign: 'justify' }}>
        <CardContent>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
        <CardContent sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <img style={{ width: '50px' }} src={img} alt="" />
          <Box>
            <Typography variant="subtitle1">
              {name}
            </Typography>
            <Typography variant="body1">
              {address}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Testimonial;