import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const { t } = useTranslation();

  return (
    <div className="breadcrumbs mt-28 md:mt-30 text-sm ml-6 hidden md:block">
      <ul>
        <li>
          <button>
            <Link to="/">{t('home')}</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/Teams">{t('teams')}</Link>
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

export default Breadcrumbs;
