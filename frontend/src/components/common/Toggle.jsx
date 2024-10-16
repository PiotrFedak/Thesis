import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ toggleForm, isLogin }) => {
  return (
    <div className="mt-4 text-center">
      {isLogin ? (
        <p className="text-gray-500">
          Don&#39;t have an account?{' '}
          <button
            type="button"
            onClick={toggleForm}
            className="link link-hover text-gray-400"
          >
            Register here
          </button>
        </p>
      ) : (
        <p className="text-gray-500">
          Already have an account?{' '}
          <button
            type="button"
            onClick={toggleForm}
            className="link link-hover text-gray-400"
          >
            Login here
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
