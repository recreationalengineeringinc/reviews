/* eslint-disable react/no-array-index-key */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ReviewComment from './reviewComment';
import './reviewsList.css';

const ReviewsList = ({ reviews, totalReviews, handleClick }) => (
  <div className="reviewsList-container">
    <div className="reviewsList-header">
      <div>1–{reviews.length} of {totalReviews} Reviews</div>
      <div>Sort by:</div>
    </div>
    {reviews.map((comment, i) =>
      <ReviewComment key={i} comment={comment} handleClick={handleClick} />,
    )}
  </div>
);

export default ReviewsList;
