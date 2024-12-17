import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const BreadcrumbsTeams = () => {
  const { t } = useTranslation();

  return (
    <div className="breadcrumbs text-sm ml-6 absolute top-1 hidden md:block">
      <ul>
        <li>
          <button>
            <Link to="/">{t('home')}</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/TeamsTable">{t('teamsTable')}</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/TeamsList">{t('teamsList')}</Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BreadcrumbsTeams;
