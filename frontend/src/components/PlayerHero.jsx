import React from 'react';
import CustomButton from '../components/common/CustomButton';
import PlayerHeroData from '../components/PlayerHeroData';
import PlayerHeroDataPL from '../translations/PlayerHeroDataPL';
import { useTranslation } from 'react-i18next';

const PlayerHero = () => {
  const { i18n, t } = useTranslation();
  const playerData = i18n.language === 'pl' ? PlayerHeroDataPL : PlayerHeroData;

  return (
    <div className="w-full flex flex-col justify-between items-center py-16 px-8">
      <div className="text-right w-full max-w-[1240px]">
        <h1 className="text-6xl font-bold mb-4">
          <span className="dark:text-custom-red text-custom-blue">
            NBAVerse
          </span>{' '}
          {t('playersPage')}
        </h1>
        <p className="text-2xl max-w-md ml-auto mt-12">
          {t('playersPageDescription')}
        </p>
      </div>

      <div className="mb-24 mt-12 grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-[1240px] mx-auto">
        {playerData.map((player, index) => (
          <div
            key={index}
            className="card w-96 shadow-xl flex flex-col justify-between mx-auto"
          >
            <div className="card-body">
              <h2 className="card-title">{player.name}</h2>
              <p>{player.description}</p>
              <div className="card-actions justify-end mr-2 md:mr-0 mt-2 md:mt-0">
                <CustomButton
                  to="/Players"
                  color="custom-red"
                  hoverColor="custom-blue"
                >
                  {t('seeMore')}
                </CustomButton>
              </div>
            </div>
            <figure className="mr-12 md:mr-0">
              <img src={player.image} alt={player.name} className="w-full" />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerHero;
