import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="overflow-hidden text-custom-black dark:text-white dark:bg-custom-black bg-custom-white z-10">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
