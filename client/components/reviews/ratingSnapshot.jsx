/* eslint-disable react/no-array-index-key */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import StarBar from './starBar';

const RatingSnapshot = ({ reviewsCount, totalReviews }) => {
  const counts = [];
  for (let i = 5; i > 0; i -= 1) {
    counts.push(reviewsCount[i]);
  }

  return (
    <table>
      <th className="histogram-header">
        <h4>Rating Snapshot</h4>
        <p>Select a row below to filter reviews.</p>
      </th>
      <tb className="histogram-container">
        {counts.map((count, i) =>
          <StarBar key={i} count={count} i={i} totalReviews={totalReviews} />,
        )}
      </tb>
    </table>
  );
};

export default RatingSnapshot;
