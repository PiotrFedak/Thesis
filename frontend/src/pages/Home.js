import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../layouts/Footer';
import PlayerHero from '../components/PlayerHero';
import HeroMap from '../components/HeroMap';
import TeamHero from '../components/TeamHero';

const Home = () => {
  return (
    <div className="overflow-hidden text-custom-black dark:text-white dark:bg-custom-black bg-custom-white z-10">
      <Navbar />
      <Hero />
      <HeroMap />
      <TeamHero />
      <PlayerHero />
      <Footer />
    </div>
  );
};

export default Home;
