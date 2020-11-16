/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const StarBar = (props) => {
  const percentage = (props.count / props.totalReviews) * 100;
  return (
    <tr id={`${5 - props.i}stars`} className="barContainer">
      <td className="histogram-star">
        {5 - props.i}
        ★
      </td>
      <td className="bar">
        <div className="percentageReview" style={{ width: `${percentage}%` }} />
      </td>
      <td className="starCount" style={{ display: 'inline-block' }}>{props.count}</td>
    </tr>
  );
};

export default StarBar;
