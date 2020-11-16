/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const StarBar = (props) => {
  const percentage = (props.count / props.totalReviews) * 100;
  return (
    <div id={`${5 - props.i}stars`} className="barContainer">
      {5 - props.i}
      &nbsp;
      <span id="star">★</span>
      <span className="bar">
        <span className="percentageReview" style={{ width: `${percentage}%` }} />
      </span>
      <span style={{ display: 'inline-block' }}>{props.count}</span>
    </div>
  );
};

export default StarBar;
