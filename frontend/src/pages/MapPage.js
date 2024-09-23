import React from 'react';
import Navbar from '../components/Navbar';
import Map from '../components/Map';

const MapPage = () => {
  return (
    <div className="h-screen overflow-hidden text-custom-black dark:text-white dark:bg-custom-black bg-white relative z-10">
      <Navbar />
      <Map />
    </div>
  );
};

export default MapPage;
