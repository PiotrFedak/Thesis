import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { fetchTeams } from '../services/apiTeamList';

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
    return <div className="text-center text-lg">Loading teams...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <Navbar />
      <h1 className="text-3xl font-bold text-center mb-8 mt-32">NBA Teams</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {teams.map((team) => (
          <div
            key={team.id}
            className="team-card text-center p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
          >
            <img
              src={`${team.name.replace(/ /g, '')}.png`}
              alt={`${team.full_name} logo`}
              className="h-16 mx-auto mb-2"
              onError={(e) => {
                e.target.src = `default.png`;
              }}
            />
            <h2 className="text-lg font-bold">{team.full_name}</h2>
            <p className="text-sm text-gray-500">{team.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsList;
