import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ClearButton from '../components/common/ClearButton';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { fetchPlayers } from '../services/ApiPlayers';
import BasketBlue from '../Images/BasketBlue.svg';
import BasketRed from '../Images/BasketRed.svg';

const Players = () => {
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
      setError('Failed to fetch players.');
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
            Search Players
          </h1>

          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Type player name..."
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
                <p>Position: {player.position || 'N/A'}</p>
                <p>Height: {player.height_feet || 'N/A'}&#39; </p>
                <p>Weight: {player.weight || 'N/A'} lbs</p>
                <p>Jersey Number: {player.jersey_number || 'N/A'}</p>
                <p>College: {player.college || 'N/A'}</p>
                <p>Country: {player.country || 'N/A'}</p>
                <p>Draft Year: {player.draft_year || 'N/A'}</p>
                <p>Draft Round: {player.draft_round || 'N/A'}</p>
                <p>Draft Number: {player.draft_number || 'N/A'}</p>
                <div className="mt-2">
                  <h3 className="text-lg font-medium">Team Information:</h3>
                  <p>Team: {player.team ? player.team.full_name : 'No team'}</p>
                  <p>City: {player.team ? player.team.city : 'N/A'}</p>
                  <p>
                    Conference: {player.team ? player.team.conference : 'N/A'}
                  </p>
                  <p>Division: {player.team ? player.team.division : 'N/A'}</p>
                </div>
              </li>
            ))}
          </ul>
        )}

        {!loading && players.length === 0 && searchTerm && (
          <p>No players found for &quot;{searchTerm}&quot;.</p>
        )}
      </div>
    </div>
  );
};

export default Players;
