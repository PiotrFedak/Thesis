import React from 'react';
import PropTypes from 'prop-types';

const ClearButton = ({ clearSearch }) => {
  return (
    <button
      onClick={clearSearch}
      className="btn btn-outline mt-4 border-2 border-custom-blue dark:border-custom-red text-custom-blue dark:text-custom-red"
    >
      Clear Results
    </button>
  );
};

ClearButton.propTypes = {
  clearSearch: PropTypes.func.isRequired,
};

export default ClearButton;
