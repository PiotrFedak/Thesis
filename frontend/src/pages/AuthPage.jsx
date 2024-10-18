import React from 'react';
import Navbar from '../components/Navbar';
import Auth from '../components/Auth';

const AuthPage = () => {
  return (
    <div className="overflow-hidden h-screen text-custom-black dark:text-white dark:bg-custom-black bg-custom-white z-10">
      <Navbar />
      <div className="overflow-y-auto h-full mt-28">
        <Auth />
      </div>
    </div>
  );
};

export default AuthPage;
