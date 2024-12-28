import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import { IoBasketballOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer p-10 dark:bg-custom-black bg-custom-white flex flex-col md:flex-row justify-between">
      <aside className="flex items-center space-x-4 mb-6 md:mb-0">
        <div className="dark:text-custom-red text-custom-blue">
          <IoBasketballOutline size={60} />
        </div>
        <div id="footer">
          <p className="font-head text-2xl">{t('footer.title')}</p>
          <p>{t('footer.description')}</p>
          <p className="font-body">
            &copy; {new Date().getFullYear()} - {t('footer.copyright')}
          </p>
        </div>
      </aside>

      <div className="flex flex-col md:flex-row justify-between w-full md:w-auto space-y-6 md:space-y-0 md:space-x-16">
        <div className="flex flex-col items-start">
          <h6 className="footer-title text-xl font-semibold">
            {t('footer.socialTitle')}
          </h6>
          <div className="flex space-x-4">
            <FaTwitter size={24} color="#1DA1F2" />
            <FaYoutube size={24} color="#FF0000" />
            <FaFacebook size={24} color="#3b5999" />
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <h6 className="footer-title text-xl font-semibold">
            {t('footer.linksTitle')}
          </h6>
          <div className="grid grid-flow-col gap-2">
            <Link to="/">{t('footer.home')}</Link>
            <Link to="/Map">{t('footer.map')}</Link>
            <Link to="/TeamsTable">{t('footer.teams')}</Link>
            <Link to="/Players">{t('footer.players')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
