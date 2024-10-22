import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HeroRed from '../Images/HeroRed.svg';
import HeroBlue from '../Images/HeroBlue.svg';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-12 flex flex-col w-full">
      <div className="flex w-full h-screen flex-col lg:flex-row">
        <div className="justify-center items-start w-full lg:w-1/2 flex flex-col p-10 lg:p-20">
          <h1 id="hero-title" className="text-5xl lg:text-8xl font-bold mb-6">
            {t('welcome')}{' '}
            <span className="text-custom-blue dark:text-custom-red">
              NBAVerse
            </span>
          </h1>

          <p id="hero-description" className="text-xl lg:text-2xl mb-10">
            {t('explore')}
          </p>

          <Link
            to="/Auth"
            id="hero-get-started"
            className="px-10 py-4 text-xl hover:scale-105 duration-300 font-semibold bg-custom-blue dark:bg-custom-red text-white border-2 rounded-md hover:bg-white dark:hover:bg-custom-black hover:text-custom-blue dark:hover:text-custom-white transition-colors"
          >
            {t('getStarted')}
          </Link>

          <div className="mt-4">
            <p className="text-sm" id="hero-login-prompt">
              {t('alreadyHaveAccount')}{' '}
              <Link
                to="/Auth"
                id="hero-login-link"
                className="text-custom-blue dark:text-custom-red underline hover:text-custom-red text-base"
              >
                {t('login')}
              </Link>
            </p>
          </div>
        </div>

        <div className="lg:flex items-center justify-center w-full lg:w-1/2">
          <img
            id="heroImageLight"
            alt="NBAVerse"
            src={HeroBlue}
            className="w-[80%] h-auto rounded-lg shadow-md dark:hidden"
          />
          <img
            id="heroImageDark"
            alt="NBAVerse Dark"
            src={HeroRed}
            className="w-[80%] h-auto rounded-lg shadow-md hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
