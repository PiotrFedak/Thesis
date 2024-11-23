import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Toggle = ({ toggleForm, isLogin }) => {
  const { t } = useTranslation();

  return (
    <div className="mt-4 text-center">
      {isLogin ? (
        <p className="text-black dark:text-white">
          {t('dontHaveAccount')}{' '}
          <button
            type="button"
            onClick={toggleForm}
            className="link link-hover text-gray-400"
          >
            {t('registerHere')}
          </button>
        </p>
      ) : (
        <p className="text-gray-500">
          {t('alreadyHaveAccount')}{' '}
          <button
            type="button"
            onClick={toggleForm}
            className="link link-hover text-gray-400"
          >
            {t('loginHere')}
          </button>
        </p>
      )}
    </div>
  );
};

Toggle.propTypes = {
  toggleForm: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
};

export default Toggle;
