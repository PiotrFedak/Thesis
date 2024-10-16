import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CustomButton = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="px-4 py-2 font-semibold rounded-md text-white bg-custom-blue dark:bg-custom-red 
                 hover:bg-custom-white dark:hover:bg-custom-black border-4 border-custom-blue 
                 dark:border-custom-red dark:hover:text-custom-white hover:text-custom-blue transition-colors"
    >
      {children}
    </Link>
  );
};

CustomButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomButton;
