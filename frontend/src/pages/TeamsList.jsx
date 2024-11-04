import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { fetchTeams } from '../services/apiTeamList';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { useTranslation } from 'react-i18next';
import Footer from '../layouts/Footer';

const TeamsList = () => {
  const { t } = useTranslation();
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const getTeams = async () => {
      try {
        const teamsData = await fetchTeams();
        setTeams(teamsData);
      } catch (error) {
        console.error('Error loading teams:', error);
      } finally {
        setLoading(false);
      }
    };

    getTeams();
  }, []);

  const filteredTeams = teams.filter((team) => {
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
            className="team-card text-center p-6 bg-slate-200 dark:bg-black/70 shadow-lg rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
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
