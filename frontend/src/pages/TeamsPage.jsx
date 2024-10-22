import React from 'react';
import Navbar from '../components/Navbar';
import TeamTable from '../components/TeamTable';
import Footer from '../layouts/Footer';
import BreadcrumbsTeams from '../components/common/BreadcrumbsTeams';

const TeamsPage = () => {
  return (
    <div className="relative h-screen bg-white dark:bg-custom-black text-custom-black dark:text-white">
      <Navbar />
      <BreadcrumbsTeams />
      <div className="overflow-y-auto h-full mt-28">
        <TeamTable />
      </div>
      <Footer />
    </div>
  );
};

export default TeamsPage;
