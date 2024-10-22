import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const { t } = useTranslation();

  return (
    <div className="breadcrumbs text-sm ml-6 absolute top-32 hidden md:block">
      <ul>
        <li>
          <Link to="/">{t('home')}</Link>
        </li>
        <li>
          <Link to="/players">{t('players')}</Link>
        </li>
        <li>{t('search')}</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
