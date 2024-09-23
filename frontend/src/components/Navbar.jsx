import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IoCloseCircleOutline,
  IoMenu,
  IoBasketballOutline,
} from 'react-icons/io5';
import Switcher from '../Switcher';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavChange = () => {
    setNav(!nav);
  };

  return (
    <div className="border-2 rounded-lg border-gray-500 my-4 mx-12 relative z-50">
      <div className="flex justify-between max-w-[1240px] mx-auto px-3 items-center h-28">
        <div className="flex items-center">
          <IoBasketballOutline size={60} color="#C9082A" />
        </div>
        <h1 className="w-full text-3xl font-bold text-[#2c51b7]">NBAVerse.</h1>
        <ul className="hidden md:flex items-center">
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/Map">Map</Link>
          </li>
          <li className="p-4">Teams</li>
          <li className="p-4">
            <Link to="/Stats">Stats</Link>
          </li>
          <li className="p-4">Profile</li>
          <li className="pt-8 pl-4">
            <Switcher />
          </li>
        </ul>
      </div>

      <div
        onClick={handleNavChange}
        className="block md:hidden z-50 absolute top-4 right-2"
      >
        {nav ? <IoCloseCircleOutline size={30} /> : <IoMenu size={30} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed left-0 top-0 w-full h-[70%] border-b border-b-gray-900 bg-[#000300] ease-in-out duration-500 z-10'
            : 'ease-in-out duration-500 fixed top-[-100%] w-full h-[70%] z-50'
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#2c51b7] m-4">
          NBAVerse.
        </h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">
          <Link to="/Map">Map</Link>
        </li>
        <li className="p-4 border-b border-gray-600">Teams</li>
        <li className="absolute top-8 right-28">
          <Switcher />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
