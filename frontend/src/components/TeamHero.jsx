import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import teamsEN from './teamData';
import teamsPL from '../translations/teamDataPl';

const TeamHero = () => {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const { i18n, t } = useTranslation();

  const teams = i18n.language === 'pl' ? teamsPL : teamsEN;

  const nextTeam = () => {
    setCurrentTeamIndex((prevIndex) => (prevIndex + 1) % teams.length);
  };

  const prevTeam = () => {
    setCurrentTeamIndex(
      (prevIndex) => (prevIndex - 1 + teams.length) % teams.length
    );
  };

  const { name, image, description, history } = teams[currentTeamIndex];

  return (
    <div className="py-8 w-full min-h-screen flex flex-col items-center">
      <h2 className="text-3xl text-center uppercase">{t('teams')}</h2>
      <h3 className="text-6xl font-bold text-center py-6">
        <span className="dark:text-custom-red text-custom-blue">NBAVerse</span>{' '}
        {t('teamPage')}
      </h3>
      <p className="text-3xl text-center mb-12">{t('teamPageDescription')}</p>

      <div className="gap-20 flex flex-col md:flex-row items-center justify-center px-4">
        <div className="card w-96 flex flex-col items-center shadow-2xl rounded-lg">
          <figure>
            <img
              src={image}
              alt={`${name} logo`}
              className="object-cover w-full h-48 rounded-t-lg"
            />
          </figure>
          <div className="card-body flex flex-col items-center justify-between">
            <div className="flex justify-center w-full">
              <h2 className="card-title text-center">{name}</h2>
            </div>
            <p className="max-h-24 flex-grow text-center overflow-hidden text-ellipsis">
              {description}
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={prevTeam}
                className="btn px-4 py-2 font-semibold rounded-md text-white bg-custom-blue dark:bg-custom-red 
                 hover:bg-custom-white dark:hover:bg-custom-black border-4 border-custom-blue 
                 dark:border-custom-red dark:hover:text-custom-white hover:text-custom-blue transition-colors"
              >
                {t('previous')}
              </button>
              <div className="indicator">
                <span className="indicator-item badge dark:bg-custom-red bg-custom-blue animate-bounce"></span>
                <Link
                  to="/Teams"
                  className="btn bg-custom-white text-custom-black border-2 hover:bg-custom-blue hover:text-custom-white dark:bg-custom-black dark:text-custom-white dark:border-custom-white dark:hover:bg-custom-red"
                >
                  {t('goToTeams')}
                </Link>
              </div>
              <button
                onClick={nextTeam}
                className="btn px-4 py-2 font-semibold rounded-md text-white bg-custom-blue dark:bg-custom-red 
                 hover:bg-custom-white dark:hover:bg-custom-black border-4 border-custom-blue 
                 dark:border-custom-red dark:hover:text-custom-white hover:text-custom-blue transition-colors"
              >
                {t('next')}
              </button>
            </div>
          </div>
        </div>

        <ul className="timeline timeline-vertical p-4 rounded-lg shadow-2xl max-w-xs">
          {history.map((item, index) => (
            <li key={index} className="flex mb-4 items-center">
              <div className="timeline-start w-12 text-center text-xl font-bold">
                {item.year}
              </div>
              <div className="timeline-middle mx-4">-</div>
              <div className="timeline-end timeline-box bg-custom-white text-custom-black border-2 dark:bg-custom-black dark:text-custom-white dark:border-neutral-50">
                {item.event}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamHero;
