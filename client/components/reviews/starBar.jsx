/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const StarBar = (props) => {
  const percentage = (props.count / props.totalReviews) * 100;
  return (
    <button id={`${5 - props.i}stars`} type="button" className="barContainer" onClick={(e) => props.filterReviews(e, `${5 - props.i}`)}>
      <div className="histogram-star">
        <span className="star-text">{5 - props.i}</span>
        <span className="star">★</span>
      </div>
      <div className="bar">
        <span className="percentageReview" style={{ width: `${percentage}%` }} />
      </div>
      <div className="starCount" style={{ display: 'inline-block' }}>{props.count}</div>
    </button>
  );
};

export default StarBar;
