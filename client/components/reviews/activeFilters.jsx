/* eslint-disable react/prop-types */
import React from 'react';
import ActiveFilterButtons from './activeFilterButtons';

const ActiveFilters = ({ filter, handleClick }) => {
  if (filter.bool) {
    return (
      <div className="activeFilter-container">
        <div className="activeFilter-header">Active Filters</div>
        {Object.keys(filter.ratings).map((key) =>
          <ActiveFilterButtons key={key} clearId={key} />
        )}
        <button id="clearFilter" type="button" onClick={(e) => handleClick(e, null, 'clearFilter')}>
          Clear All <i className="fa fa-times-circle" />
        </button>
      </div>
    );
  }

  return null;
};

export default ActiveFilters;
