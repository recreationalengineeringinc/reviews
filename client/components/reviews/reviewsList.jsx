/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ReviewComment from './reviewComment';
import ActiveFilters from './activeFilters';
import './reviewsList.css';

const ReviewsList = ({ reviews, totalReviews, handleClick, filter, filterReviews, sortBy, sortReviews }) => (
  <div className="reviewsList-container">
    <div className="reviewsList-header">
      <div className="reviewHeader-left">1–{reviews.length} of {filter.bool ? filter.length : totalReviews} Reviews</div>
      {(sortBy === 'Most Relevant') ? <span className="fa fa-question-circle" aria-hidden="true" /> : null}
      <div className="reviewSort">
        Sort by: <button className="dropdown">{sortBy}</button><span className="dropArrow">▼</span>
        <div className="transparent" />
        <div className="dropdown-container">
          <div className="dropdown-content">
            <p onClick={() => sortReviews('Most Relevant')}>Most Relevant</p>
            <p onClick={() => sortReviews('Most Helpful')}>Most Helpful</p>
            <p onClick={() => sortReviews('Highest to Lowest Rating')}>Highest to Lowest Rating</p>
            <p onClick={() => sortReviews('Lowest to Highest Rating')}>Lowest to Highest Rating</p>
            <p onClick={() => sortReviews('Most Recent')}>Most Recent</p>
          </div>
        </div>
      </div>
    </div>
    <ActiveFilters filter={filter} handleClick={handleClick} filterReviews={filterReviews} />
    {reviews.map((comment) =>
      <ReviewComment key={comment.id} comment={comment} handleClick={handleClick} />,
    )}
  </div>
);

export default ReviewsList;
