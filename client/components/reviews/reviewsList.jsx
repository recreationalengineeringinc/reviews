/* eslint-disable react/no-array-index-key */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ReviewComment from './reviewComment';
import './reviewsList.css';

const ReviewsList = ({ reviews, totalReviews, handleClick, filter }) => (
  <div className="reviewsList-container">
    <div className="reviewsList-header">
      <div>1–{reviews.length} of {filter.bool ? filter.length : totalReviews} Reviews</div>
      <div className="reviewSort">
        Sort by: <span className="dropdown">Most Recent</span><span className="dropArrow">▼</span>
        <div className="transparent" />
        <div className="dropdown-content">
          <p>Most Relevant</p>
          <p>Most Helpful</p>
          <p>Highest to Lowest Rating</p>
          <p>Lowest to Highest Rating</p>
          <p>Most Recent</p>
        </div>
      </div>
    </div>
    {reviews.map((comment) =>
      <ReviewComment key={comment.id} comment={comment} handleClick={handleClick} />,
    )}
  </div>
);

export default ReviewsList;
