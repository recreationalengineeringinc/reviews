/* eslint-disable react/no-array-index-key */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import StarBar from './starBar';

const RatingSnapshot = ({ reviewsCount, totalReviews }) => {
  // const five = `"width:${(reviewsCount[5] / totalReviews) * 100}%"`;
  // const four = `"width:${(reviewsCount[4] / totalReviews) * 100}%"`;
  // const three = `"width:${(reviewsCount[3] / totalReviews) * 100}%"`;
  // const two = `"width:${(reviewsCount[2] / totalReviews) * 100}%"`;
  // const one = `"width:${(reviewsCount[1] / totalReviews) * 100}%"`;

  const counts = [];
  for (let i = 5; i > 0; i -= 1) {
    counts.push(reviewsCount[i]);
  }

  return (
    <div>
      <div className="histogram-header">
        <h4>Rating Snapshot</h4>
        <p>Select a row below to filter reviews.</p>
      </div>
      {counts.map((count, i) =>
        <StarBar key={i} count={count} i={i} totalReviews={totalReviews} />,
      )}

      {/* <div id="5stars" className="bar">
        5&nbsp;
        <span id="star">★</span>
        <span className="percentageReview" style={five}></span>
        <span>{reviewsCount[5]}</span>
      </div>
      <div id="4stars" className="bar">
        4&nbsp;
        <span id="star">★</span>
        <span className="percentageReview" style={four}></span>
        <span>{reviewsCount[4]}</span>
      </div>
      <div id="3stars" className="bar">
        3&nbsp;
        <span id="star">★</span>
        <span className="percentageReview" style={three}></span>
        <span>{reviewsCount[3]}</span>
      </div>
      <div id="2stars" className="bar">
        2&nbsp;
        <span id="star">★</span>
        <span className="percentageReview" style={two}></span>
        <span>{reviewsCount[2]}</span>
      </div>
      <div id="1stars" className="bar">
        1&nbsp;
        <span id="star">★</span>
        <span className="percentageReview" style={one}></span>
        <span>{reviewsCount[1]}</span>
      </div> */}
    </div>
  );
};

export default RatingSnapshot;
