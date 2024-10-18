import React from 'react';
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

const GithubButton = ({ text }) => {
  return (
    <button className="btn border dark:text-white hover:scale-105 duration-300 text-black bg-white dark:bg-black hover:bg-slate-400 dark:hover:bg-custom-black hover:shadow-xl">
      <FaGithub className="mr-2" /> {text}
    </button>
  );
};

GithubButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default GithubButton;
