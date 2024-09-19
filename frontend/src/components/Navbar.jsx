import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCloseCircleOutline, IoMenu } from 'react-icons/io5';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavChange = () => {
    setNav(!nav);
  };

  return (
    <div className="border-2 rounded-lg border-gray-500 my-4 mx-12 relative">
      <div className="flex justify-between max-w-[1240px] mx-auto px-3 items-center h-28 text-white">
        <h1 className="w-full text-3xl font-bold text-[#2c51b7]">NBAVerse.</h1>
        <ul className="hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">
            <Link to="/Map">Map</Link>
          </li>
          <li className="p-4">Teams</li>
          <li className="p-4">PLACEHOLDER</li>
          <li className="p-4">Profile</li>
        </ul>
      </div>
      <div
        onClick={handleNavChange}
        className="block md:hidden z-20 absolute top-4 right-4"
      >
        {nav ? <IoCloseCircleOutline size={30} /> : <IoMenu size={30} />}
      </div>
      <ul
        className={
          nav
            ? 'fixed left-0 top-0 w-full h-[60%] border-b border-b-gray-900 bg-[#000300] ease-in-out duration-500 z-10'
            : 'ease-in-out duration-500 fixed top-[-100%] w-full h-[60%] z-10'
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          NBAVerse.
        </h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">
          <Link to="/Map">Map</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
