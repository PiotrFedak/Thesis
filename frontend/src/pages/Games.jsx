import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { fetchGames } from '../services/ApiGames';

const Games = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const getGames = async () => {
      try {
        const gamesData = await fetchGames();
        setGames(gamesData);
        setLoading(false);
      } catch (err) {
        setError('Error loading games');
        setLoading(false);
      }
    };

    getGames();
  }, []);

  const filteredGames = games.filter((game) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return game.status === 'Final';
    if (filter === 'upcoming') return game.status !== 'Final';
    return true;
  });

  if (loading) {
    return <div className="text-center mt-8">Loading games...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }

  return (
    <div className="mx-auto py-8 dark:bg-custom-black bg-custom-white">
      <Navbar />
      <div className="flex justify-between items-center">
        <h1 className="mt-28 text-3xl font-bold text-center mb-8 ml-8 text-custom-blue dark:text-custom-red">
          NBA Games
        </h1>
        <div className="dropdown dropdown-end mt-28 mr-8">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 dark:bg-custom-black bg-custom-white text-custom-blue dark:text-custom-red"
          >
            Filter Games
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a onClick={() => setFilter('all')}>All Games</a>
            </li>
            <li>
              <a onClick={() => setFilter('completed')}>Completed Games</a>
            </li>
            <li>
              <a onClick={() => setFilter('upcoming')}>Upcoming Games</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid ml-8 mr-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredGames.map((game) => {
          const homeLogo = `/${game.home_team.name.replace(/ /g, '')}.png`;
          const visitorLogo = `/${game.visitor_team.name.replace(/ /g, '')}.png`;

          const winner =
            game.home_team_score > game.visitor_team_score
              ? game.home_team.full_name
              : game.visitor_team.full_name;

          const isUpcoming = game.status !== 'Final';

          return (
            <div
              key={game.id}
              className={`p-6 shadow-lg rounded-lg text-center ${
                isUpcoming
                  ? 'bg-gray-300 dark:bg-gray-700'
                  : 'bg-slate-200 dark:bg-black/70'
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="text-center">
                  <img
                    src={homeLogo}
                    alt={`${game.home_team.full_name} logo`}
                    className="h-16 mx-auto mb-2"
                    onError={(e) => {
                      e.target.src = `default.png`;
                    }}
                  />
                  <h2 className="text-lg font-bold text-custom-black dark:text-white">
                    {game.home_team.full_name}
                  </h2>
                  <p className="text-base text-custom-blue dark:text-custom-red">
                    {isUpcoming ? '—' : game.home_team_score}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-custom-black dark:text-white">
                    VS
                  </p>
                  <p className="text-sm text-gray-500">{game.status}</p>
                  {isUpcoming ? (
                    <p className="text-sm text-yellow-600 dark:text-yellow-300">
                      SOON
                    </p>
                  ) : (
                    game.status === 'Final' && (
                      <p className="text-sm text-green-500">Winner: {winner}</p>
                    )
                  )}
                </div>
                <div className="text-center">
                  <img
                    src={visitorLogo}
                    alt={`${game.visitor_team.full_name} logo`}
                    className="h-16 mx-auto mb-2"
                    onError={(e) => {
                      e.target.src = `default.png`;
                    }}
                  />
                  <h2 className="text-lg font-bold text-custom-black dark:text-white">
                    {game.visitor_team.full_name}
                  </h2>
                  <p className="text-base text-custom-blue dark:text-custom-red">
                    {isUpcoming ? '—' : game.visitor_team_score}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Games;
