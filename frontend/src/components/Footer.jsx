import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import { IoBasketballOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer p-10 dark:bg-custom-black bg-custom-white flex flex-col md:flex-row justify-between">
      <aside className="flex items-center space-x-4 mb-6 md:mb-0">
        <IoBasketballOutline size={60} color="#C9082A" />
        <div>
          <p className="font-head text-2xl">NBAVerse.</p>
          <p>Piotr Fedak Thesis</p>
          <p className="font-body">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </aside>

      <div className="flex flex-col md:flex-row justify-between w-full md:w-auto space-y-6 md:space-y-0 md:space-x-16">
        <div className="flex flex-col items-start">
          <h6 className="footer-title text-xl font-semibold">Social</h6>
          <div className="flex space-x-4">
            <FaTwitter size={24} color="#1DA1F2" />
            <FaYoutube size={24} color="#FF0000" />
            <FaFacebook size={24} color="#3b5999" />
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <h6 className="footer-title text-xl font-semibold">Links</h6>
          <div className="grid grid-flow-col gap-2">
            <Link to="/">Home</Link>
            <Link to="/Map">Map</Link>
            <Link to="/Teams">Teams</Link>
            <Link to="/Players">Players</Link>
            <Link to="/Profile">Profile</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
