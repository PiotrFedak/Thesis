import React from 'react';
import Navbar from '../components/Navbar';
import TeamTable from '../components/TeamTable';

const TeamsPage = () => {
  return (
    <div className="h-screen overflow-y-hidden text-custom-black dark:text-white dark:bg-custom-black bg-white relative z-10">
      <Navbar />
      <TeamTable />
    </div>
  );
};

export default TeamsPage;
