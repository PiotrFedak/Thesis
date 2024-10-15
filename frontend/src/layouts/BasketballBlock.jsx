import React from 'react';

const BasketballBlock = () => {
  return (
    <div className="hidden lg:block absolute left-0 top-2/3 -mt-[2em] w-[8em] overflow-hidden z-10 transform -rotate-180">
      <div className="border-[30px] md:border-[36px] dark:border-custom-red border-custom-blue  md:h-[46em] md:w-[46em] rounded-full flex items-center justify-center"></div>
    </div>
  );
};

export default BasketballBlock;
