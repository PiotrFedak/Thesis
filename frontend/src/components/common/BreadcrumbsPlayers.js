import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const BreadcrumbsPlayers = () => {
  const { t } = useTranslation();

  return (
    <div className="breadcrumbs text-sm ml-6 absolute top-32 z-20 hidden md:block">
      <ul>
        <li>
          <button>
            <Link to="/">{t('home')}</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/Players">{t('players')}</Link>
          </button>
        </li>
        <li>{t('search')}</li>
      </ul>
    </div>
  );
};

export default BreadcrumbsPlayers;
