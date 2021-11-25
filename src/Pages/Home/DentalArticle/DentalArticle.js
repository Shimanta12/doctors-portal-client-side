import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import dentalImage from './../../../images/treatment.png'

const DentalArticle = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <img style={{ width: '100%' }} src={dentalImage} alt="" />
        </Grid>
        <Grid item xs={12} sm={7} sx={{ textAlign: 'left' }}>
          <Typography variant="h2" sx={{ mb: 5 }}>
            Exceptional Dental care, On Your Terms.
          </Typography>
          <Typography variant="body1" gutterbottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus augue nulla, dictum euismod pellentesque et, venenatis non nibh. Donec at placerat nisl. Integer sit amet elementum sem, sed rhoncus enim. Mauris accumsan tristique finibus. In in aliquet lorem. Fusce iaculis nunc metus,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus augue nulla, dictum euismod pellentesque et, venenatis non nibh. Donec at placerat nisl. Integer sit amet elementum sem, sed rhoncus enim. Mauris accumsan tristique finibus. In in aliquet lorem. Fusce iaculis nunc metus,
          </Typography>
          <Button variant="contained" sx={{ px: 4, py: 1, mt: 3 }}>
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DentalArticle;