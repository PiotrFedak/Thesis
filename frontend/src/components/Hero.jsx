import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HeroRed from '../Images/HeroRed.svg';
import HeroBlue from '../Images/HeroBlue.svg';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full mt-12">
      <div className="flex flex-col lg:flex-row w-full h-screen">
        <div className="flex flex-col justify-center items-start w-full lg:w-1/2 p-10 lg:p-20">
          <h1 className="text-5xl lg:text-8xl font-bold mb-6">
            {t('welcome')}{' '}
            <span className="text-custom-blue dark:text-custom-red">
              NBAVerse
            </span>
          </h1>

          <p className="text-xl lg:text-2xl mb-10">{t('explore')}</p>

          <Link
            to="/Auth"
            className="px-10 py-4 text-xl font-semibold bg-custom-blue dark:bg-custom-red text-white border-2 rounded-md hover:bg-white dark:hover:bg-custom-black hover:text-custom-blue dark:hover:text-custom-white transition-colors"
          >
            {t('getStarted')}
          </Link>

          <div className="mt-4">
            <p className="text-sm">
              {t('alreadyHaveAccount')}{' '}
              <Link
                to="/Auth"
                className="text-custom-blue dark:text-custom-red underline hover:text-custom-red text-base"
              >
                {t('login')}
              </Link>
            </p>
          </div>
        </div>

        <div className="lg:flex items-center justify-center w-full lg:w-1/2">
          <img
            alt="NBAVerse"
            src={HeroBlue}
            className="w-[80%] h-auto rounded-lg shadow-md dark:hidden"
          />
          <img
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
