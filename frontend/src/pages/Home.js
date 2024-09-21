import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="text-custom-black dark:text-white">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
