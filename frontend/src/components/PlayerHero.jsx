import React from 'react';
import CustomButton from '../components/common/CustomButton';

const PlayerHero = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center py-16 px-8">
      <div className="text-right w-full max-w-[1240px]">
        <h1 className="text-6xl font-bold mb-4">
          <span className="dark:text-custom-red text-custom-blue">
            NBAVerse
          </span>{' '}
          Players Page
        </h1>
        <p className="text-2xl max-w-md ml-auto mt-12">
          Use the Players Search Bar to find detailed profiles of your favorite
          NBA players.
        </p>
      </div>

      <div className="mb-24 mt-12 grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-[1240px] mx-auto">
        {[
          {
            name: 'Luka Dončić',
            description:
              'Star player for the Dallas Mavericks known for his playmaking skills.',
            image: '/Luka Doncic.webp',
          },
          {
            name: 'Kevin Durant',
            description:
              'NBA champion and scoring legend currently with the Phoenix Suns.',
            image: '/kevin durant.webp',
          },
          {
            name: 'Jaylen Brown',
            description:
              'Boston Celtics star known for his athleticism and two-way play.',
            image: '/Jaylen Brown.webp',
          },
        ].map((player, index) => (
          <div
            key={index}
            className="card w-96 shadow-xl flex flex-col justify-between mx-auto"
          >
            <div className="card-body">
              <h2 className="card-title">{player.name}</h2>
              <p>{player.description}</p>
              <div className="card-actions justify-end">
                <CustomButton
                  to="/Players"
                  color="custom-red"
                  hoverColor="custom-blue"
                >
                  See More
                </CustomButton>
              </div>
            </div>
            <figure>
              <img src={player.image} alt={player.name} className="w-full" />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerHero;
