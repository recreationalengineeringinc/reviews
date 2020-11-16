/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const StarBar = (props) => {
  const percentage = (props.count / props.totalReviews) * 100;
  return (
    <div id={`${5 - props.i}stars`} className="barContainer">
      <div className="histogram-star">
        {5 - props.i}
        ★
      </div>
      <div className="bar">
        <span className="percentageReview" style={{ width: `${percentage}%` }} />
      </div>
      <div className="starCount" style={{ display: 'inline-block' }}>{props.count}</div>
    </div>
  );
};

export default StarBar;
