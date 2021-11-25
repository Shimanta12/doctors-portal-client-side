import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import harry from './../../../images/people-1.png'
import watson from './../../../images/people-2.png'
import stone from './../../../images/people-3.png'

const testimonials = [
  {
    name: 'Winston Harry',
    address: 'California',
    img: harry,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus augue nulla, dictum euismod pellentesque et, venenatis non nibh. Donec at placerat nisl. Integer sit amet elementum sem, sed rhoncus enim. Mauris accumsan tristique finibus. In in aliquet lorem. Fusce iaculis nunc metus'
  },
  {
    name: 'Ema Watson',
    address: 'London',
    img: watson,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus augue nulla, dictum euismod pellentesque et, venenatis non nibh. Donec at placerat nisl. Integer sit amet elementum sem, sed rhoncus enim. Mauris accumsan tristique finibus. In in aliquet lorem. Fusce iaculis nunc metus'
  },
  {
    name: 'Ema Stone',
    address: 'New York',
    img: stone,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus augue nulla, dictum euismod pellentesque et, venenatis non nibh. Donec at placerat nisl. Integer sit amet elementum sem, sed rhoncus enim. Mauris accumsan tristique finibus. In in aliquet lorem. Fusce iaculis nunc metus'
  }
]

const Testimonials = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">
        Testimonial
      </Typography>
      <Typography variant="h2">
        What our patient says.
      </Typography>
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {
          testimonials.map(testimonial => <Testimonial key={testimonial.name} testimonial={testimonial} />)
        }
      </Grid>
    </Container>
  );
};

export default Testimonials;