import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  IoCloseCircleOutline,
  IoMenu,
  IoBasketballOutline,
} from 'react-icons/io5';
import Switcher from '../components/comon/Switcher';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleNavChange = () => {
    setNav(!nav);
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'p-4 text-custom-blue border-b-2 border-custom-blue dark:border-custom-red dark:text-custom-red'
      : 'p-4';
  };

  return (
    <div className="fixed top-0 w-full bg-custom-white dark:bg-custom-black shadow-md z-50">
      <div className="flex justify-between items-center max-w-[1340px] mx-auto px-6 h-28">
        <div className="flex items-center">
          <IoBasketballOutline size={60} color="#C9082A" />
          <h1 className="text-3xl font-bold text-[#2c51b7] ml-4">NBAVerse.</h1>
        </div>
        <ul className="hidden md:flex items-center">
          <li className={getLinkClass('/')}>
            <Link to="/">Home</Link>
          </li>
          <li className={getLinkClass('/Map')}>
            <Link to="/Map">Map</Link>
          </li>
          <li className={getLinkClass('/Teams')}>
            <Link to="/Teams">Teams</Link>
          </li>
          <li className={getLinkClass('/Players')}>
            <Link to="/Players">Players</Link>
          </li>
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
            : 'duration-500 fixed top-[-100%] ease-in-out w-full h-[70%] z-50'
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#2c51b7] m-4">
          NBAVerse.
        </h1>
        <li className={getLinkClass('/')}>
          <Link to="/">Home</Link>
        </li>
        <li className={getLinkClass('/Map')}>
          <Link to="/Map">Map</Link>
        </li>
        <li className={getLinkClass('/Teams')}>
          <Link to="/Teams">Teams</Link>
        </li>
        <li className={getLinkClass('/Players')}>
          <Link to="/Players">Players</Link>
        </li>
        <li className="absolute top-8 right-28">
          <Switcher />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
