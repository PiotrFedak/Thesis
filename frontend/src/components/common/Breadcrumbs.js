import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const { t } = useTranslation();

  return (
    <div className="breadcrumbs hidden md:block mt-20 text-sm ml-6">
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
