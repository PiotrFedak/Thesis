import React from 'react';
import NBAVerse from '../Images/NBAVerse.png';
import { Link } from 'react-router-dom';

const HeroMap = () => {
  return (
    <div name="home" className="w-full h-screen flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Map of NBA Clubs</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            NBAVerse Map Page
          </h1>
          <p className="text-2xl mr-2 mt-2">
            Interactive map displaying the locations of NBA clubs for easy
            navigation.
          </p>
          <div className="py-4 px-6 sm:w-[60%] my-6 md:py-2 md:px-0">
            <Link
              to="/Map"
              className="px-10 py-4 text-xl font-semibold bg-custom-blue text-white border-4 border-custom-blue rounded-md hover:bg-white hover:text-custom-blue transition-colors"
            >
              Go to Map
            </Link>
          </div>
        </div>
        <div>
          <img className="w-full" src={NBAVerse} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default HeroMap;
