import React from 'react';
import { Link } from 'react-router-dom';
import MapHero from '../Images/MapHero.png';

const HeroMap = () => {
  return (
    <div className="hero min-h-screen">
      <div className="m-0 px-2 lg:px-12 hero-content flex-col lg:flex-row-reverse w-full max-w-full">
        <div className="lg:w-1/2 lg:justify-end flex justify-center w-full">
          <img
            src={MapHero}
            alt="Map of NBA Clubs"
            className="w-full h-auto sm:scale-75 md:scale-75 lg:scale-90 xl:scale-100 2xl:scale-125 sm:mr-2 md:mr-4 lg:mr-6 xl:mr-8 2xl:mr-12"
          />
        </div>

        <div className="text-center lg:text-left lg:w-1/2 flex flex-col justify-center py-4 lg:py-8">
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            <span className="text-custom-blue dark:text-custom-red">
              NBAVerse
            </span>{' '}
            Map Page
          </h1>
          <p className="text-2xl mt-2 mb-2">
            Interactive map displaying the locations of NBA clubs for easy
            navigation.
          </p>
          <div className="py-4">
            <Link
              to="/Map"
              className="px-8 py-2 text-xl font-semibold bg-custom-blue dark:bg-custom-red text-white border-4 border-custom-blue dark:border-custom-red rounded-md hover:bg-white hover:text-custom-blue dark:hover:text-custom-white transition-colors dark:hover:bg-custom-black"
            >
              Go to Map
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMap;
