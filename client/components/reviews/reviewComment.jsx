/* eslint-disable no-lonely-if */
/* eslint-disable react/button-has-type */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import ReviewOptionalText from './reviewOptionalText';
import ReviewOptionalRating from './reviewOptionalRating';

const ReviewComment = ({ comment }) => {
  let recommended;
  if (comment.recommended) {
    recommended = (
      <div className="recommended">
        <span className="bold"><i className="fa fa-check-circle" /> Yes,</span> I recommend this product.
      </div>
    );
  } else if (comment.recommend !== null) {
    recommended = (
      <div className="recommended">
        <span className="bold"><i className="fa fa-times-circle" /> No,</span> I don&apos;t recommend this product.
      </div>
    );
  } else {
    recommended = null;
  }

  let time;
  if (comment.time < 30) {
    time = <div>{comment.time} days ago</div>;
  } else if (comment.time < 365) {
    if (Math.floor(comment.time / 30) === 1) {
      time = <div>a month ago</div>;
    } else {
      time = <div>{Math.floor(comment.time / 30)} months ago</div>;
    }
  } else {
    if (Math.floor(comment.time / 365) === 1) {
      time = <div>a year ago</div>;
    } else {
      time = <div>{Math.floor(comment.time / 365)} years ago</div>;
    }
  }

  return (
    <div className="comment-container">
      <div className="user-container">
        <div className="user bold">{comment.user.username}</div>
        <div className="userLocation">{comment.user.location}</div>
        <div className="user">
          {comment.user.totalreviews > 1 ? 'Reviews' : 'Review' }
          <span className="bold">&nbsp;{comment.user.totalreviews}</span>
        </div>
      </div>
      <div className="review-text-container">
        <div className="review-text-header">
          <div className="rating">
            <div>Stars ·</div>
            {time}
          </div>
          <div className="review-title bold">{comment.title}</div>
        </div>
        <div className="review-text">{comment.text}</div>
        <div className="optional-review">
          {Object.keys(comment.optional).map((key, i) =>
            <ReviewOptionalText key={i} category={key} answer={comment.optional[key]} />,
          )}
        </div>
        {recommended}
        <div className="helpful">
          <span>Helpful?</span>
          <button id="yes">Yes·{comment.helpful.yes}</button>
          <button id="no">No·{comment.helpful.no}</button>
          <button id="report">Report as inappropriate</button>
        </div>
      </div>
      <div className="optional-rating-container">
        <ReviewOptionalRating />
      </div>
    </div>
  );
};

export default ReviewComment;
