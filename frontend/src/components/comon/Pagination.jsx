import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <div className="flex justify-center mt-8">
      <div className="join">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`join-item btn px-4 py-2 rounded-md ${
              currentPage === i + 1
                ? 'bg-custom-blue text-white'
                : 'bg-custom-black text-custom-white hover:bg-gray-800'
            }`}
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
