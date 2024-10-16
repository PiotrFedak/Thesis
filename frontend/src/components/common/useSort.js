import { useState } from 'react';

const useSort = (initialData, initialKey = 'full_name') => {
  const [sortConfig, setSortConfig] = useState({
    key: initialKey,
    direction: 'ascending',
  });

  const sortedData = [...initialData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { sortedData, requestSort, sortConfig };
};

export default useSort;
