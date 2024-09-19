import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer footer-center bg-base-200 text-base-content rounded p-10 border mt-2">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Map</a>
        <a className="link link-hover">Teams</a>
        <a className="link link-hover">Profile</a>
      </nav>
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
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved xyz</p>
      </aside>
    </div>
  );
};

export default Footer;
