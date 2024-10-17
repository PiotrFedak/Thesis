import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const ClearButton = ({ clearSearch }) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={clearSearch}
      className="btn btn-outline mt-4 border-2 border-custom-blue dark:border-custom-red text-custom-blue dark:text-custom-red"
    >
      {t('clearResults')}
    </button>
  );
};

ClearButton.propTypes = {
  clearSearch: PropTypes.func.isRequired,
};

export default ClearButton;
