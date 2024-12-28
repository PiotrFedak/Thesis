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

  const handleNavChange = () => setNav(!nav);

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
    navigate('/');
  };

  const userInitial = currentUser?.name
    ? currentUser.name.charAt(0).toUpperCase()
    : '?';

  const getLinkClass = (path) =>
    location.pathname === path
      ? 'p-4 text-custom-blue border-b-2 border-custom-blue dark:border-custom-red dark:text-custom-red'
      : 'p-4';

  return (
    <div className="fixed top-0 w-full bg-custom-white dark:bg-custom-black shadow-xl z-50">
      <div className="flex justify-between items-center max-w-[1340px] mx-auto px-6 h-28">
        <div className="flex items-center">
          <IoBasketballOutline
            size={60}
            className="dark:text-custom-red text-custom-blue"
          />
          <h1 className="text-3xl font-bold text-custom-blue dark:text-custom-red ml-2 md:ml-4">
            NBAVerse.
          </h1>
        </div>

        <ul id="navbar" className="hidden md:flex items-center space-x-4">
          <li className={getLinkClass('/')}>
            <Link to="/">{i18n.t('home')}</Link>
          </li>
          <li className={getLinkClass('/Map')}>
            <Link to="/Map">{i18n.t('map')}</Link>
          </li>
          <li className={getLinkClass('/Teams')}>
            <Link to="/TeamsList">{i18n.t('teams')}</Link>
          </li>
          <li className={getLinkClass('/Players')}>
            <Link to="/Players">{i18n.t('players')}</Link>
          </li>
          <li className={getLinkClass('/Games')}>
            <Link to="/Games">{i18n.t('games')}</Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <button id="flag-US" onClick={() => changeLanguage('en')}>
            <Flag country="US" size={32} />
          </button>
          <button id="flag-PL" onClick={() => changeLanguage('pl')}>
            <Flag country="PL" size={32} />
          </button>
          <div id="dark-mode-switcher" className="mt-7">
            <Switcher />
          </div>
          {token ? (
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
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li className="text-custom-white dark:text-white font-semibold px-4 text-sm">
                  {currentUser?.name}
                </li>
                <li className="text-custom-white dark:text-white px-4 text-sm">
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
              className="text-white bg-custom-blue dark:bg-custom-red px-4 py-2 rounded-md"
            >
              {i18n.t('getStarted')}
            </Link>
          )}
        </div>
      </div>

      <div
        onClick={handleNavChange}
        className="block md:hidden absolute top-10 right-4 z-50"
      >
        {nav ? <IoCloseCircleOutline size={30} /> : <IoMenu size={30} />}
      </div>

      <div
        className={`${
          nav ? 'left-0' : '-left-full'
        } fixed top-0 w-full h-screen bg-custom-white dark:bg-custom-black flex flex-col p-6 ease-in-out duration-500 z-40`}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-custom-blue dark:text-custom-red">
            NBAVerse.
          </h1>
          {token ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="avatar w-12 h-12 mr-8 mt-2 bg-custom-blue dark:bg-custom-red text-white flex items-center justify-center rounded-full font-bold cursor-pointer"
              >
                {userInitial}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow"
              >
                <li className="text-custom-white dark:text-white px-4 text-sm">
                  {currentUser?.name}
                </li>
                <li className="text-custom-white dark:text-white px-4 text-sm">
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
              className="text-white bg-custom-blue dark:bg-custom-red px-4 py-2 mr-8 mt-2 rounded-md"
            >
              {i18n.t('getStarted')}
            </Link>
          )}
        </div>

        <ul className="flex flex-col space-y-4">
          <li className={getLinkClass('/')}>
            <Link to="/">{i18n.t('home')}</Link>
          </li>
          <li className={getLinkClass('/Map')}>
            <Link to="/Map">{i18n.t('map')}</Link>
          </li>
          <li className={getLinkClass('/Teams')}>
            <Link to="/TeamsTable">{i18n.t('teamsTable')}</Link>
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
        </ul>

        <div className="flex space-x-4 items-center mt-4">
          <button id="flag-US" onClick={() => changeLanguage('en')}>
            <Flag country="US" size={28} />
          </button>
          <button id="flag-PL" onClick={() => changeLanguage('pl')}>
            <Flag country="PL" size={28} />
          </button>
          <div className="mt-7">
            <Switcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
