import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './comon/Pagination';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import useSort from './comon/useSort';

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

  const {
    sortedData: sortedTeams,
    requestSort,
    sortConfig,
  } = useSort(teamData);

  const totalPages = Math.ceil(sortedTeams.length / teamsPerPage);
  const indexOfLastTeam = currentPage * teamsPerPage;
  const indexOfFirstTeam = indexOfLastTeam - teamsPerPage;
  const currentTeams = sortedTeams.slice(indexOfFirstTeam, indexOfLastTeam);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return <FaSort />;
    }
    return sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />;
  };

  if (loading) {
    return <p>Loading team data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div className="overflow-x-auto mx-32 mt-36">
        <table className="table w-full table-fixed">
          {' '}
          <thead>
            <tr>
              <th className="w-1/12 text-custom-black dark:text-white">#</th>
              <th
                onClick={() => requestSort('full_name')}
                className="cursor-pointer w-3/12 text-custom-black dark:text-white"
              >
                Team {getSortIcon('full_name')}
              </th>
              <th
                onClick={() => requestSort('city')}
                className="cursor-pointer w-3/12 text-custom-black dark:text-white"
              >
                City {getSortIcon('city')}
              </th>
              <th
                onClick={() => requestSort('conference')}
                className="cursor-pointer w-3/12 text-custom-black dark:text-white"
              >
                Conference {getSortIcon('conference')}
              </th>
              <th
                onClick={() => requestSort('division')}
                className="cursor-pointer w-3/12 text-custom-black dark:text-white"
              >
                Division {getSortIcon('division')}
              </th>
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
