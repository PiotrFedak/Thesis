import React from 'react';
import Navbar from '../components/Navbar';
import Auth from '../components/Auth';

const AuthPage = () => {
  return (
    <div className="h-screen overflow-hidden text-custom-black dark:text-white dark:bg-custom-black bg-custom-white z-10">
      <Navbar />
      <Auth />
    </div>
  );
};

export default AuthPage;
