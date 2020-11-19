import React from 'react';

const ActiveFilters = ({ filter }) => {
  if (filter.bool) {
    return (
      <div>
        <button>Clear All</button>
      </div>
    );
  }

  return null;
};

export default ActiveFilters;
