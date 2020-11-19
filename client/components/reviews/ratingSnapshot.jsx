/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import StarBar from './starBar';
import './ratingSnapshot.css';

const RatingSnapshot = ({ reviewsCount, totalReviews, filterReviews }) => {
  const counts = [];
  for (let i = 5; i > 0; i -= 1) {
    counts.push(reviewsCount[i]);
  }

  return (
    <div className="snapshot-container">
      <div className="histogram-header">
        <div>Rating Snapshot</div>
        <div>Select a row below to filter reviews.</div>
      </div>
      <div className="histogram-container">
        {counts.map((count, i) =>
          <StarBar key={i} count={count} i={i} totalReviews={totalReviews} filterReviews={filterReviews} />,
        )}
      </div>
    </div>
  );
};

export default RatingSnapshot;
