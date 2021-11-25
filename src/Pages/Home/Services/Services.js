import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import fluoride from './../../../images/fluoride.png'
import cavity from './../../../images/cavity.png'
import whitening from './../../../images/whitening.png'
import Service from '../Service/Service';


const services = [
  {
    name: 'Fluoride Treatment',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
    img: fluoride
  },
  {
    name: 'Cavity Filling',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
    img: cavity
  },
  {
    name: 'Teeth Whitening',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
    img: whitening
  }
]

const Services = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="h2" color="text.secondary" gutterBottom>
        Services We Provide
      </Typography>
      <Grid container spacing={2}>
        {
          services.map(service => <Service key={service.name} service={service} />)
        }
      </Grid>
    </Container>
  );
};

export default Services;