import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './comon/Pagination';

const TeamTable = () => {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const teamsPerPage = 15;

  useEffect(() => {
    const nbaData = async () => {
      try {
        const response = await axios.get(
          'https://api.balldontlie.io/v1/teams',
          {
            headers: {
              Authorization: process.env.REACT_APP_NBA_API_KEY,
            },
          }
        );
        setTeamData(response.data.data);
      } catch (error) {
        setError('Error fetching team data');
        console.error('Error fetching team data:', error);
      } finally {
        setLoading(false);
      }
    };

    nbaData();
  }, []);

  const totalPages = Math.ceil(teamData.length / teamsPerPage);

  const indexOfLastTeam = currentPage * teamsPerPage;
  const indexOfFirstTeam = indexOfLastTeam - teamsPerPage;
  const currentTeams = teamData.slice(indexOfFirstTeam, indexOfLastTeam);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <p>Loading team data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>City</th>
              <th>Conference</th>
              <th>Division</th>
            </tr>
          </thead>
          <tbody>
            {currentTeams.map((team, index) => (
              <tr key={team.id}>
                <td>{indexOfFirstTeam + index + 1}</td>
                <td>{team.full_name}</td>
                <td>{team.city}</td>
                <td>{team.conference}</td>
                <td>{team.division}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default TeamTable;
