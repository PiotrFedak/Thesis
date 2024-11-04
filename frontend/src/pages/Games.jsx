import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { fetchGames } from '../services/ApiGames';
import { useTranslation } from 'react-i18next';

const Games = () => {
  const { t } = useTranslation();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextCursor, setNextCursor] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [cursorHistory, setCursorHistory] = useState([]);
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get(
          'https://api.balldontlie.io/v1/teams',
          {
            headers: {
              Authorization: process.env.REACT_APP_NBA_API_KEY,
            },
          }
        );
        setTeams(response.data.data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, []);

  const getGames = async (cursor = null, page = 1) => {
    setLoading(true);
    try {
      const { data, meta } = await fetchGames(cursor, selectedTeam);
      setGames(data);
      setNextCursor(meta.next_cursor);

      if (cursor) {
        setCursorHistory((prev) => [...prev, cursor]);
      } else {
        setCursorHistory([]);
      }

      setCurrentPage(page);
      setLoading(false);
    } catch (err) {
      setError(t('errorLoadingGames'));
      setLoading(false);
    }
  };

  useEffect(() => {
    getGames();
  }, [selectedTeam]);

  const handleNext = () => {
    if (nextCursor) {
      getGames(nextCursor, currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (cursorHistory.length > 1) {
      const newHistory = [...cursorHistory];
      newHistory.pop();
      const previousCursor = newHistory[newHistory.length - 1];
      setCursorHistory(newHistory);
      getGames(previousCursor, currentPage - 1);
    } else {
      getGames(null, 1);
    }
  };

  const handleTeamChange = (e) => {
    setSelectedTeam(e.target.value);
    setCurrentPage(1);
    setCursorHistory([]);
  };

  if (loading)
    return <div className="mt-12 text-center text-lg">{t('loadingGames')}</div>;
  if (error)
    return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="mx-auto py-8 dark:bg-custom-black bg-custom-white">
      <Navbar />
      <h1 className="mt-28 text-3xl font-bold text-center mb-8 text-custom-blue dark:text-custom-red">
        {t('nbaGames')}
      </h1>

      <div className="flex justify-center mb-4">
        <select
          value={selectedTeam || ''}
          onChange={handleTeamChange}
          className="select select-bordered w-full max-w-xs mb-4 dark:bg-custom-black bg-white dark:border-gray-600 border-gray-900 text-custom-black dark:text-white"
        >
          <option value="">{t('allTeams')}</option>
          {teams.map((team) => (
            <option key={team.id} value={team.id}>
              {team.full_name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid ml-8 mr-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((game) => {
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
                    {t('vs')}
                  </p>
                  <p className="text-sm text-gray-500">{game.status}</p>
                  {isUpcoming ? (
                    <p className="text-sm text-yellow-600 dark:text-yellow-300">
                      {t('soon')}
                    </p>
                  ) : (
                    game.status === 'Final' && (
                      <p className="text-sm text-green-500">
                        {t('winner')}: {winner}
                      </p>
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

      <div className="flex justify-center mt-8">
        <div className="join grid grid-cols-2">
          <button
            className="join-item btn btn-outline"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            {t('previousPage')}
          </button>
          <button
            className="join-item btn btn-outline"
            onClick={handleNext}
            disabled={!nextCursor}
          >
            {t('nextPage')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Games;
