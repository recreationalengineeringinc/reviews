/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';

const ReviewOptionalRating = ({ category, rating }) => {
  if (category === 'easeOfAssembly') {
    if (!rating) { return null; }
    return (
      <ul>
        <li className="optionalRatingTitle">Ease of Assembly</li>
        <li>
          <div className="optionalBar">
            <span className="ratingSquare" style={{ left: `${((rating - 1) / 2) * 100}%` }} />
            <span className="middleMarker" />
          </div>
          <div className="ratingDescription-container">
            <span className="lowRating ratingDescription">Very Easy Setup</span>
            <span className="highRating ratingDescription">Difficult Setup</span>
          </div>
        </li>
      </ul>
    );
  }
  if (category === 'easeOfUse') {
    if (!rating) { return null; }
    return (
      <ul>
        <li className="optionalRatingTitle">Ease of Use</li>
        <li>
          <div className="optionalBar">
            <span className="ratingSquare" style={{ left: `${((rating - 1) / 2) * 100}%` }} />
            <span className="middleMarker" />
          </div>
          <div className="ratingDescription-container">
            <span className="lowRating ratingDescription">Difficult to use</span>
            <span className="highRating ratingDescription">Very easy to use</span>
          </div>
        </li>
      </ul>
    );
  }
  if (category === 'overallFit') {
    if (!rating) { return null; }
    return (
      <ul>
        <li className="optionalRatingTitle">Overall Fit Rating</li>
        <li>
          <div className="optionalBar">
            <span className="ratingSquare" style={{ left: `${((rating - 1) / 2) * 100}%` }} />
            <span className="middleMarker" />
          </div>
          <div className="ratingDescription-container">
            <span className="lowRating ratingDescription">Runs Small</span>
            <span className="highRating ratingDescription">Runs Large</span>
          </div>
        </li>
      </ul>
    );
  }
  if (category === 'productWeight') {
    if (!rating) { return null; }
    return (
      <ul>
        <li className="optionalRatingTitle">Product Weight</li>
        <li>
          <div className="optionalBar">
            <span className="ratingSquare" style={{ left: `${((rating - 1) / 2) * 100}%` }} />
            <span className="middleMarker" />
          </div>
          <div className="ratingDescription-container">
            <span className="lowRating ratingDescription">Lightweight</span>
            <span className="highRating ratingDescription">Heavy</span>
          </div>
        </li>
      </ul>
    );
  }
  if (category === 'wamrth') {
    if (!rating) { return null; }
    return (
      <ul>
        <li className="optionalRatingTitle">Warmth Rating</li>
        <li>
          <div className="optionalBar">
            <span className="ratingSquare" style={{ left: `${((rating - 1) / 2) * 100}%` }} />
            <span className="middleMarker" />
          </div>
          <div className="ratingDescription-container">
            <span className="lowRating ratingDescription">Not Insulated / Warm</span>
            <span className="highRating ratingDescription">Very Insulated / Warm</span>
          </div>
        </li>
      </ul>
    );
  }
  if (category === 'width') {
    if (!rating) { return null; }
    return (
      <ul>
        <li className="optionalRatingTitle">Width</li>
        <li>
          <div className="optionalBar"><span className="ratingSquare" style={{ left: `${((rating - 1) / 2) * 100}%` }} /></div>
          <div className="ratingDescription-container">
            <span className="lowRating ratingDescription">Runs Narrow</span>
            <span className="highRating ratingDescription">Runs Wide</span>
          </div>
        </li>
      </ul>
    );
  }
  return null;
};

export default ReviewOptionalRating;
