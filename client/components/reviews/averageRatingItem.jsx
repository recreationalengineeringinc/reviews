/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';

const AverageRatingItem = ({ category, rating, total = 1 }) => {
  if (!total) { return null; }
  if (rating === null) { return null; }
  if (category === 'rating') {
    return (
      <div className="starRating-container">
        <div className="starRatingTitle">Overall</div>
        <div className="starRating">
          <div className="empty-stars" />
          <div className="full-stars" style={{ width: `${((rating / total) / 5) * 100}%` }} />
        </div>
        <div className="overallRatingScore">
          {(rating / total).toFixed(1)}
        </div>
      </div>
    );
  }
  if (category === 'easeOfAssembly') {
    return (
      <div className="averageScore-container">
        <div className="averageRatingTitle">Ease of Assembly</div>
        <div className="large-text">
          <div className="averageBar">
            <span className="ratingSquare" style={{ left: `${(((rating / total) - 1) / 2) * 100}%` }} />
            <span className="middleMarker" />
          </div>
          <div className="ratingDescription-container">
            <span className="lowRating ratingDescription">Very Easy Setup</span>
            <span className="highRating ratingDescription">Difficult Setup</span>
          </div>
        </div>
        <div className="overallRatingScore" />
      </div>
    );
  }
  if (category === 'easeOfUse') {
    return (
      <div className="averageScore-container">
        <div className="averageRatingTitle">Ease of Use</div>
        <div className="large-text">
          <div className="averageBar">
            <span className="ratingSquare" style={{ left: `${(((rating / total) - 1) / 2) * 100}%` }} />
            <span className="middleMarker" />
          </div>
          <div className="ratingDescription-container">
            <span className="lowRating ratingDescription">Difficult to use</span>
            <span className="highRating ratingDescription">Very easy to use</span>
          </div>
        </div>
        <div className="overallRatingScore" />
      </div>
    );
  }
  if (category === 'overallFit') {
    return (
      <div className="averageScore-container">
        <div className="averageRatingTitle">Overall Fit Rating</div>
        <div>
          <div className="averageBar">
            <span className="ratingSquare" style={{ left: `${(((rating / total) - 1) / 2) * 100}%` }} />
            <span className="middleMarker" />
          </div>
          <div className="ratingDescription-container">
            <span className="lowRating ratingDescription">Runs Small</span>
            <span className="highRating ratingDescription">Runs Large</span>
          </div>
        </div>
        <div className="overallRatingScore" />
      </div>
    );
  }
  if (category === 'productWeight') {
    return (
      <div className="averageScore-container">
        <div className="averageRatingTitle">Product Weight</div>
        <div>
          <div className="averageBar">
            <span className="ratingSquare" style={{ left: `${(((rating / total) - 1) / 2) * 100}%` }} />
            <span className="middleMarker" />
          </div>
          <div className="ratingDescription-container">
            <span className="lowRating ratingDescription">Lightweight</span>
            <span className="highRating ratingDescription">Heavy</span>
          </div>
        </div>
        <div className="overallRatingScore" />
      </div>
    );
  }
  if (category === 'warmth') {
    return (
      <div className="averageScore-container">
        <div className="averageRatingTitle">Warmth Rating</div>
        <div className="large-text">
          <div className="averageBar">
            <span className="ratingSquare" style={{ left: `${(((rating / total) - 1) / 2) * 100}%` }} />
            <span className="middleMarker" />
          </div>
          <div className="ratingDescription-container">
            <span className="lowRating ratingDescription">Not Insulated / Warm</span>
            <span className="highRating ratingDescription">Very Insulated / Warm</span>
          </div>
        </div>
        <div className="overallRatingScore" />
      </div>
    );
  }
  if (category === 'width') {
    return (
      <div className="averageScore-container">
        <div className="averageRatingTitle">Width</div>
        <div>
          <div className="averageBar">
            <span className="ratingSquare" style={{ left: `${(((rating / total) - 1) / 2) * 100}%` }} />
            <span className="middleMarker" />
          </div>
          <div className="ratingDescription-container">
            <span className="lowRating ratingDescription">Runs Narrow</span>
            <span className="highRating ratingDescription">Runs Wide</span>
          </div>
        </div>
        <div className="overallRatingScore" />
      </div>
    );
  }
  return null;
};

export default AverageRatingItem;
