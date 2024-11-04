import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './common/Pagination';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import useSort from './common/useSort';
import { useTranslation } from 'react-i18next';

const TeamTable = () => {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();
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
    return <p className="mt-12 text-center text-lg">Loading team data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="mx-4 sm:mx-8 lg:mx-26 flex flex-col items-center mt-12">
      <div className="overflow-x-auto w-full">
        <table className="text-left table-auto w-full">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="px-4 py-2 text-custom-black dark:text-white">#</th>
              <th
                onClick={() => requestSort('full_name')}
                className="px-4 text-custom-black dark:text-white py-2 cursor-pointer"
              >
                {t('team')} {getSortIcon('full_name')}
              </th>
              <th
                onClick={() => requestSort('city')}
                className="px-4 py-2 cursor-pointer text-custom-black dark:text-white"
              >
                {t('city')} {getSortIcon('city')}
              </th>
              <th
                onClick={() => requestSort('conference')}
                className="px-4 py-2 cursor-pointer text-custom-black dark:text-white"
              >
                {t('conference')} {getSortIcon('conference')}
              </th>
              <th
                onClick={() => requestSort('division')}
                className="px-4 py-2 cursor-pointer text-custom-black dark:text-white"
              >
                {t('division')} {getSortIcon('division')}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentTeams.map((team, index) => (
              <tr key={team.id} className="border-b dark:border-gray-600">
                <td className="px-4 py-2">{indexOfFirstTeam + index + 1}</td>
                <td className="px-4 py-2">{team.full_name}</td>
                <td className="px-4 py-2">{team.city}</td>
                <td className="px-4 py-2">{team.conference}</td>
                <td className="px-4 py-2">{team.division}</td>
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
