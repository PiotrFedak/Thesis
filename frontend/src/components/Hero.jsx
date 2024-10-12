import React from 'react';
import { Link } from 'react-router-dom';
import HeroMap from './HeroMap';
import TeamHero from './TeamHero';
import NBAVerse from '../Images/NBAVerse.png';
import PlayerHero from './PlayerHero';

const Hero = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col lg:flex-row w-full h-screen">
        <div className="flex flex-col justify-center items-start w-full lg:w-1/2 p-10 lg:p-20">
          <h1 className="text-5xl lg:text-8xl font-bold mb-6">
            Welcome to <span className="text-custom-blue">NBAVerse</span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-700 mb-10">
            Explore the NBAVerse with a map of NBA clubs, team tables, player
            search bar, and live statistics.
          </p>
          <Link
            to="/Auth"
            className="px-10 py-4 text-xl font-semibold bg-custom-blue text-white border-4 border-custom-blue rounded-md hover:bg-white hover:text-custom-blue transition-colors"
          >
            Get Started
          </Link>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              Already got an account?{' '}
              <Link
                to="/Auth"
                className="text-custom-blue underline hover:text-custom-red"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>

        <div className="lg:flex items-center justify-center w-full lg:w-1/2">
          <img
            alt="NBAVerse"
            src={NBAVerse}
            className="w-[80%] h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="w-full">
        <HeroMap />
        <TeamHero />
        <PlayerHero />
      </div>
    </div>
  );
};

export default Hero;
