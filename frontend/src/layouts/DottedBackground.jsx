import React from 'react';

const DecorativeShapes = () => {
  return (
    <div className="hidden lg:block absolute w-full h-full pointer-events-none">
      <div className="absolute top-8 left-0 w-48 h-48 xl:w-64 xl:h-64 rounded-full dark:bg-custom-red bg-custom-blue opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="absolute top-6 right-0 w-40 h-40 xl:w-56 xl:h-56 rounded-full dark:bg-custom-red bg-custom-blue opacity-50 transform translate-y-2/3"></div>

      <div className="absolute top-16 right-20 w-24 h-24 xl:w-32 xl:h-32 rounded-full dark:bg-custom-red bg-custom-blue opacity-60"></div>

      <div className="absolute top-24 right-38 w-24 h-24 xl:w-30 xl:h-30 rounded-full dark:bg-custom-red bg-custom-blue opacity-60"></div>
    </div>
  );
};

export default DecorativeShapes;
