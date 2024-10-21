import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  IoCloseCircleOutline,
  IoMenu,
  IoBasketballOutline,
} from 'react-icons/io5';
import Flag from 'react-flagkit';
import Switcher from './common/Switcher';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const { i18n } = useTranslation();

  const handleNavChange = () => {
    setNav(!nav);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'p-4 text-custom-blue border-b-2 border-custom-blue dark:border-custom-red dark:text-custom-red'
      : 'p-4';
  };

  const showGetStartedButton =
    location.pathname === '/' ||
    location.pathname === '/Map' ||
    location.pathname === '/Teams';

  return (
    <div className="fixed top-0 w-full bg-custom-white dark:bg-custom-black shadow-xl z-50">
      <div className="flex justify-between items-center max-w-[1340px] mx-auto px-6 h-28">
        <div className="flex items-center">
          <div className="dark:text-custom-red text-custom-blue">
            <IoBasketballOutline size={60} />
          </div>
          <h1 className="text-3xl font-bold text-custom-blue dark:text-custom-red ml-2 md:ml-4">
            NBAVerse.
          </h1>
        </div>

        <ul
          id="navbar"
          className="hidden md:flex items-center justify-center space-x-3 flex-grow ml-4"
        >
          <li className={getLinkClass('/')}>
            <Link to="/">{i18n.t('home')}</Link>
          </li>
          <li className={getLinkClass('/Map')}>
            <Link to="/Map">{i18n.t('map')}</Link>
          </li>
          <li className={getLinkClass('/Teams')}>
            <Link to="/Teams">{i18n.t('teams')}</Link>
          </li>
          <li className={getLinkClass('/Players')}>
            <Link to="/Players">{i18n.t('players')}</Link>
          </li>
        </ul>

        <div className="flex items-center justify-end space-x-4 lg:w-1/6">
          <div className="flex flex-col items-center space-y-3 lg:mr-0 mr-2">
            <button id="flag-US" onClick={() => changeLanguage('en')}>
              <Flag country="US" size={32} />
            </button>
            <button id="flag-PL" onClick={() => changeLanguage('pl')}>
              <Flag country="PL" size={32} />
            </button>
          </div>
          <div id="dark-mode-switcher" className="pt-8 lg:pr-0 pr-8">
            {' '}
            <Switcher />
          </div>
        </div>
      </div>

      {showGetStartedButton && (
        <div className="hidden 2xl:block">
          <Link
            to="/Auth"
            className="top-8 flex absolute right-12 px-2 py-2 text-xl font-semibold bg-custom-blue dark:bg-custom-red text-white border-2 rounded-md hover:bg-white dark:hover:bg-custom-black hover:text-custom-blue dark:hover:text-custom-white transition-colors"
          >
            {i18n.t('getStarted')}
          </Link>
        </div>
      )}

      <div
        onClick={handleNavChange}
        className="block md:hidden z-50 absolute top-10 right-2"
      >
        {nav ? <IoCloseCircleOutline size={30} /> : <IoMenu size={30} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed left-0 top-0 w-full h-[70%] border-b border-b-gray-900 dark:bg-[#000300] bg-slate-200 ease-in-out duration-500 z-10'
            : 'duration-500 fixed top-[-100%] ease-in-out w-full h-[70%] z-50'
        }
      >
        <h1 className="w-full text-3xl font-bold text-custom-blue dark:text-custom-red m-4">
          NBAVerse.
        </h1>
        <li className={getLinkClass('/')}>
          <Link to="/">{i18n.t('home')}</Link>
        </li>
        <li className={getLinkClass('/Map')}>
          <Link to="/Map">{i18n.t('map')}</Link>
        </li>
        <li className={getLinkClass('/Teams')}>
          <Link to="/Teams">{i18n.t('teams')}</Link>
        </li>
        <li className={getLinkClass('/Players')}>
          <Link to="/Players">{i18n.t('players')}</Link>
        </li>
        <li className={getLinkClass('/Auth')}>
          <Link to="/Auth">{i18n.t('auth')}</Link>
        </li>
        <li className="absolute top-10 right-16">
          <Switcher />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
