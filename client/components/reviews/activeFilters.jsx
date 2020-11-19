import React from 'react';

const ActiveFilters = ({ filter }) => {
  if (filter.bool) {
    return (
      <div>
        <button id="clearFilter" type="button">
          Clear All <i className="fa fa-times-circle" />
        </button>
      </div>
    );
  }

  return null;
};

export default ActiveFilters;
