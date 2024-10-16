import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <div className="flex justify-center mt-12">
      <div className="join">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`join-item btn px-4 py-2 rounded-md  
              ${
                currentPage === i + 1
                  ? 'dark:bg-custom-red bg-custom-blue text-white'
                  : 'bg-white text-black dark:bg-custom-black dark:text-custom-white'
              } 
              hover:bg-gray-300 dark:hover:bg-gray-700 border border-gray-400 dark:border-gray-600`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default Pagination;
