import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import { IoBasketballOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className="footer footer-center p-8">
      <aside>
        <IoBasketballOutline size={60} color="#C9082A" />
        <p className="font-head text-2xl">NBAVerse.</p>
        <br />
        Providing reliable tech since 1992
        <p className="font-body">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FaTwitter size={30} />
          </a>
          <a>
            <FaYoutube size={30} />
          </a>
          <a>
            <FaFacebook size={30} />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
