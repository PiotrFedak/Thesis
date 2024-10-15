import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../layouts/Footer';
import PlayerHero from '../components/PlayerHero';
import HeroMap from '../components/HeroMap';
import TeamHero from '../components/TeamHero';
import ScrollToTopButton from '../components/comon/ScrollToTopButton';

const Home = () => {
  return (
    <div className="overflow-hidden text-custom-black dark:text-white dark:bg-custom-black bg-custom-white z-10">
      <Navbar />
      <div className="mt-24 md:mt-14">
        <Hero />
      </div>
      <HeroMap />
      <TeamHero />
      <PlayerHero />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Home;
