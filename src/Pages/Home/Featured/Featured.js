import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { Box } from '@mui/system';

const Featured = () => {
  return (
    <Container sx={{ marginTop: '-70px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', p: 4, backgroundColor: 'aqua' }} elevation={3}>
            <AlarmOnIcon sx={{ fontSize: '60px' }} />
            <Box>
              <Typography variant="h5">
                Opening Hours
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', p: 4, backgroundColor: 'black', color: 'white' }} elevation={3}>
            <LocationOnIcon sx={{ fontSize: '60px' }} />
            <Box>
              <Typography variant="h5">
                Visit Our Location
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'aqua', p: 4 }} elevation={3}>
            <AddIcCallIcon sx={{ fontSize: '60px' }} />
            <Box>
              <Typography variant="h5">
                Contact Us Now
              </Typography>
              <Typography variant="body1">
                +000 123 45324 <br />
                consectetur adipiscing elit.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Featured;