import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  IoCloseCircleOutline,
  IoMenu,
  IoBasketballOutline,
} from 'react-icons/io5';
import Flag from 'react-flagkit';
import Switcher from './common/Switcher';
import { useStateContext } from '../contexts/ContextProvider';
import axiosClientWeb from '../lib/axiosClientWeb';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { token, logout } = useStateContext();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosClientWeb.get('/api/getCurrentUser');
        setCurrentUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);

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

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
    navigate('/');
  };

  const userInitial = currentUser?.name
    ? currentUser.name.charAt(0).toUpperCase()
    : '?';

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
          <li className={getLinkClass('/Games')}>
            <Link to="/Games">{i18n.t('games')}</Link>
          </li>
        </ul>

        <ul className="hidden md:flex items-center space-x-4">
          <li>
            <button id="flag-US" onClick={() => changeLanguage('en')}>
              <Flag country="US" size={32} />
            </button>
          </li>
          <li>
            <button id="flag-PL" onClick={() => changeLanguage('pl')}>
              <Flag country="PL" size={32} />
            </button>
          </li>
          <li className="pt-6">
            <Switcher />
          </li>
          <li>
            {token ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="avatar mb-1 w-12 h-12 bg-custom-blue dark:bg-custom-red text-white dark:text-custom-white flex items-center justify-center rounded-full font-bold cursor-pointer"
                >
                  {userInitial}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li className="text-custom-white dark:text-white font-semibold px-4">
                    {currentUser?.name}
                  </li>
                  <li className="text-custom-white dark:text-gray-400 text-sm px-4">
                    {currentUser?.email}
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left text-red-500"
                    >
                      {i18n.t('logout')}
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                to="/Auth"
                className="pb-2 pt-2 hover:shadow-xl hover:scale-105 duration-300 px-4 py-2 text-xl font-semibold bg-custom-blue dark:bg-custom-red text-white border-2 rounded-md hover:bg-white dark:hover:bg-custom-black hover:text-custom-blue dark:hover:text-custom-white transition-colors"
              >
                {i18n.t('getStarted')}
              </Link>
            )}
          </li>
        </ul>
      </div>

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
        <li className={getLinkClass('/TeamsList')}>
          <Link to="/TeamsList">{i18n.t('teamsList')}</Link>
        </li>
        <li className={getLinkClass('/Games')}>
          <Link to="/Games">{i18n.t('games')}</Link>
        </li>

        <li className="absolute top-10 right-14">
          <Switcher />
        </li>

        {token && (
          <div className="absolute top-8 right-28">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="avatar w-12 h-12 bg-custom-blue dark:bg-custom-red text-white flex items-center justify-center rounded-full font-bold cursor-pointer"
              >
                {userInitial}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow"
              >
                <li className="text-custom-white dark:text-white font-semibold px-4 text-sm">
                  {currentUser?.name}
                </li>
                <li className="text-custom-white dark:text-white font-semibold px-4 text-sm">
                  {currentUser?.email}
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-red-500"
                  >
                    {i18n.t('logout')}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
