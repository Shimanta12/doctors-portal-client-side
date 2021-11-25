import React from 'react';
import { Box, Button, Grid, Typography, Container } from '@mui/material';
import bannerImage from './../../../images/chair.png'
import bg from './../../../images/bg.png'

const banner = {
  height: '100vh',
  backgroundImage: `url(${bg})`,
  display: 'flex',
  alignItems: 'center'
}
const Banner = () => {
  return (
    <Box style={banner}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography sx={{ fontWeight: 'bold' }} variant="h2">
              Your New Smile Starts Here
            </Typography>
            <Typography variant="body1" align="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus augue nulla, dictum euismod pellentesque et, venenatis non nibh. Donec at placerat nisl. Integer sit amet elementum sem, sed rhoncus enim. Mauris accumsan tristique finibus. In in aliquet lorem. Fusce iaculis nunc metus,
            </Typography>
            <Button sx={{ my: 3, px: 3, py: 1.5 }} variant="contained">Get Appointment</Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img style={{ width: '100%' }} src={bannerImage} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;