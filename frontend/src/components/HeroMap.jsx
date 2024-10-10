import React from 'react';
import { Link } from 'react-router-dom';
import Test from '../Images/Test.png';

const HeroMap = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-[1240px] m-auto">
        <div className="flex justify-center w-full lg:w-1/2 lg:justify-end">
          <img
            src={Test}
            alt="Map of NBA Clubs"
            className="w-full h-auto md:w-[120%] md:scale-100"
          />
        </div>

        <div className="text-center lg:text-left lg:w-1/2 flex flex-col justify-center px-6 py-8">
          <p className="text-2xl">Map</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            NBAVerse Map Page
          </h1>
          <p className="text-2xl mt-2 mb-2">
            Interactive map displaying the locations of NBA clubs for easy
            navigation.
          </p>
          <div className="py-4">
            <Link
              to="/Map"
              className="px-8 py-2 text-xl font-semibold bg-custom-blue text-white border-4 border-custom-blue rounded-md hover:bg-white hover:text-custom-blue transition-colors"
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
