import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { fetchTeams } from '../services/apiTeamList';
import Breadcrumbs from '../components/common/Breadcrumbs';

const TeamsList = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div className="mt-12 text-center text-lg">Loading teams...</div>;
  }

  return (
    <div className="bg-custom-white dark:bg-custom-black text-custom-black dark:text-white overflow-y-hidden">
      <Navbar />
      <Breadcrumbs />
      <h1 className="text-3xl font-bold text-center mb-8 text-custom-blue dark:text-custom-red">
        NBA Teams
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {teams.map((team) => (
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
    </div>
  );
};

export default TeamsList;
