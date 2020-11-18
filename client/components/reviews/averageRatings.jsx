/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import AverageRatingItem from './averageRatingItem';
import './averageRating.css';

const AverageRatings = ({ overall }) => (
  <div className="averageRating-container">
    <div className="averageRating-header">Average Customer Ratings</div>
    {Object.keys(overall).map((key, i) =>
      <AverageRatingItem key={i} category={key} rating={overall[key].total} total={overall[key].count} />,
    )}
  </div>
);

export default AverageRatings;
