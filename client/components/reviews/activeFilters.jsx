/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import ActiveFilterButtons from './activeFilterButtons';

const ActiveFilters = ({ filter, handleClick, filterReviews }) => {
  if (filter.bool) {
    return (
      <div className="activeFilter-container">
        <div className="activeFilter-header">Active Filters</div>
        {Object.keys(filter.ratings).map((key) =>
          <ActiveFilterButtons key={key} clearId={key} filterReviews={filterReviews} />,
        )}
        <button className="review-button" id="clearFilter" type="button" onClick={(e) => handleClick(e, null, 'clearFilter')}>
          Clear All <i className="fa fa-times-circle" />
        </button>
      </div>
    );
  }

  return null;
};

export default ActiveFilters;
