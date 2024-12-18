import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { fetchTeams } from '../services/apiTeamList';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { useTranslation } from 'react-i18next';
import Footer from '../layouts/Footer';
import axiosClientWeb from '../lib/axiosClientWeb';
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';

const TeamsList = () => {
  const { t } = useTranslation();
  const [teams, setTeams] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const getTeamsAndFavorites = async () => {
      try {
        const teamsData = await fetchTeams();
        const favResponse = await axiosClientWeb.get('/api/favorites');
        setTeams(teamsData);
        setFavorites(favResponse.data);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };
    getTeamsAndFavorites();
  }, []);

  const toggleFavorite = async (teamId) => {
    try {
      const response = await axiosClientWeb.post('/api/favorites/toggle', {
        team_id: teamId,
      });
      setFavorites(response.data.favorites);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  const sortedTeams = [...teams].sort((a, b) => {
    const aIsFavorite = favorites.includes(a.id) ? -1 : 1;
    const bIsFavorite = favorites.includes(b.id) ? -1 : 1;
    return aIsFavorite - bIsFavorite;
  });

  const filteredTeams = sortedTeams.filter((team) => {
    if (filter === 'all') return true;
    return team.conference === filter;
  });

  if (loading) {
    return <div className="mt-12 text-center text-lg">{t('loadingTeams')}</div>;
  }

  return (
    <div className="bg-custom-white dark:bg-custom-black text-custom-black dark:text-white overflow-y-hidden">
      <Navbar />
      <Breadcrumbs />

      <div className="flex justify-between items-center">
        <div className="dropdown dropdown-right mt mr-8 mb-2">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 dark:bg-custom-black bg-transparent text-custom-black dark:text-white hover:bg-inherit"
          >
            {t('filterByConference')}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow text-custom-black dark:text-white bg-custom-white dark:bg-custom-black"
          >
            <li>
              <a onClick={() => setFilter('all')}>{t('allTeams')}</a>
            </li>
            <li>
              <a onClick={() => setFilter('East')}>{t('easternConference')}</a>
            </li>
            <li>
              <a onClick={() => setFilter('West')}>{t('westernConference')}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-14">
        {filteredTeams.map((team) => (
          <div
            key={team.id}
            className="relative team-card text-center p-6 bg-slate-200 dark:bg-black/70 shadow-lg rounded-lg hover:scale-110 transition-transform duration-300"
          >
            <button
              className="absolute top-2 right-2 text-2xl"
              onClick={() => toggleFavorite(team.id)}
              aria-label={
                favorites.includes(team.id)
                  ? t('removeFavorite')
                  : t('addFavorite')
              }
            >
              {favorites.includes(team.id) ? (
                <FaHeart className="text-red-500 hover:scale-125 transition-transform" />
              ) : (
                <CiHeart className="text-gray-500 hover:scale-125 transition-transform" />
              )}
            </button>
            <Link to={`/teams/${team.id}`}>
              <img
                src={`${team.name.replace(/ /g, '')}.png`}
                alt={`${team.full_name} logo`}
                className="h-12 mx-auto mb-2"
                onError={(e) => {
                  e.target.src = `default.png`;
                }}
              />
              <h2 className="text-lg font-bold text-custom-black dark:text-white">
                {team.full_name}
              </h2>
              <p className="text-base text-custom-blue dark:text-custom-red">
                {team.city}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default TeamsList;
