import React from 'react';
import Banner from '../Banner/Banner';
import DentalArticle from '../DentalArticle/DentalArticle';
import Featured from '../Featured/Featured';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
  return (
    <div>
      <Banner />
      <Featured />
      <Services />
      <DentalArticle />
      <Testimonials />
    </div>
  );
};

export default Home;