/* eslint-disable react/no-array-index-key */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ReviewComment from './reviewComment';
import './reviewsList.css';

const ReviewsList = ({ reviews, totalReviews }) => (
  <div className="reviewsList-container">
    <div>1–{reviews.length} of {totalReviews} Reviews</div>
    <div>Sort by:</div>
    {reviews.map((comment, i) =>
      <ReviewComment key={i} comment={comment} />,
    )}
  </div>
);

export default ReviewsList;
