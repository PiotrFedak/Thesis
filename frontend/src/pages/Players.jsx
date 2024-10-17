import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ClearButton from '../components/common/ClearButton';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { fetchPlayers } from '../services/ApiPlayers';
import BasketBlue from '../Images/BasketBlue.svg';
import BasketRed from '../Images/BasketRed.svg';
import playerSearchTranslation from '../translations/playerSearchTranslatio';
import { useTranslation } from 'react-i18next';

const Players = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const translations = playerSearchTranslation[lang];

  const [searchTerm, setSearchTerm] = useState('');
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        getPlayers(searchTerm);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const getPlayers = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const playerData = await fetchPlayers(query);
      setPlayers(playerData);
    } catch (error) {
      setError(translations.failedToFetchPlayers || 'Failed to fetch players.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setPlayers([]);
  };

  return (
    <div className="relative h-screen overflow-y-hidden text-custom-black dark:text-white dark:bg-custom-black bg-white">
      <Navbar />

      <div className="absolute left-0 top-5 w-1/4 h-full pointer-events-none opacity-80 hidden 2xl:block">
        <img
          src={BasketBlue}
          alt="Basketball Background"
          className="dark:hidden w-full h-full object-cover"
        />
        <img
          src={BasketRed}
          alt="Basketball Background"
          className="hidden dark:block w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 p-4 flex flex-col items-center mt-32">
        <div className="w-full max-w-lg">
          <h1 className="text-2xl font-semibold mb-4 text-center">
            {translations.searchTitle}
          </h1>

          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder={translations.searchPlaceholder}
            className="input input-bordered w-full mb-4 dark:bg-custom-black bg-white dark:border-gray-600 border-gray-900"
          />

          <div className="flex justify-center">
            <ClearButton clearSearch={clearSearch} />
          </div>
        </div>

        {loading && (
          <div className="flex justify-center">
            <LoadingSpinner size="lg" />
          </div>
        )}

        {error && <p>{error}</p>}

        {players.length > 0 && (
          <ul className="mt-4 w-full max-w-2xl">
            {players.map((player) => (
              <li
                key={player.id}
                className="border p-4 mb-4 text-center dark:border-gray-600 border-gray-900"
              >
                <h2 className="text-xl font-semibold mb-2">
                  {player.first_name} {player.last_name}
                </h2>
                <p>
                  {translations.position}: {player.position || 'N/A'}
                </p>
                <p>
                  {translations.height}: {player.height_feet || 'N/A'}&#39;{' '}
                </p>
                <p>
                  {translations.weight}: {player.weight || 'N/A'} lbs
                </p>
                <p>
                  {translations.jerseyNumber}: {player.jersey_number || 'N/A'}
                </p>
                <p>
                  {translations.college}: {player.college || 'N/A'}
                </p>
                <p>
                  {translations.country}: {player.country || 'N/A'}
                </p>
                <p>
                  {translations.draftYear}: {player.draft_year || 'N/A'}
                </p>
                <p>
                  {translations.draftRound}: {player.draft_round || 'N/A'}
                </p>
                <p>
                  {translations.draftNumber}: {player.draft_number || 'N/A'}
                </p>
                <div className="mt-2">
                  <h3 className="text-lg font-medium">
                    {translations.teamInfoTitle}
                  </h3>
                  <p>
                    {translations.team}:{' '}
                    {player.team ? player.team.full_name : translations.noTeam}
                  </p>
                  <p>
                    {translations.city}:{' '}
                    {player.team ? player.team.city : 'N/A'}
                  </p>
                  <p>
                    {translations.conference}:{' '}
                    {player.team ? player.team.conference : 'N/A'}
                  </p>
                  <p>
                    {translations.division}:{' '}
                    {player.team ? player.team.division : 'N/A'}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}

        {!loading && players.length === 0 && searchTerm && (
          <p>
            {translations.noPlayersFound} &quot;{searchTerm}&quot;.
          </p>
        )}
      </div>
    </div>
  );
};

export default Players;
