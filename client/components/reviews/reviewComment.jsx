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

const ReviewComment = ({ comment, handleClick }) => {
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
    time = `${comment.time} days ago`;
  } else if (comment.time < 365) {
    if (Math.floor(comment.time / 30) === 1) {
      time = 'a month ago';
    } else {
      time = `${Math.floor(comment.time / 30)} months ago`;
    }
  } else {
    if (Math.floor(comment.time / 365) === 1) {
      time = 'a year ago';
    } else {
      time = `${Math.floor(comment.time / 365)} years ago`;
    }
  }

  let helpful;
  if (comment.helpful.clicked) {
    helpful = (
      <div className="helpfulClicked">
        <div id="yes">Yes · <span style={{ color: 'green' }}>{comment.helpful.yes}</span></div>
        <div id="no">No · <span style={{ color: 'red' }}>{comment.helpful.no}</span></div>
      </div>
    );
  } else {
    helpful = (
      <div className="helpfulButtons">
        <button id="yes" className="commentButton review-button" onClick={(e) => handleClick(e, comment)}>Yes·{comment.helpful.yes}</button>
        <button id="no" className="commentButton review-button" onClick={(e) => handleClick(e, comment)}>No·{comment.helpful.no}</button>
      </div>
    );
  }

  let reported;
  if (comment.reported) {
    reported = <span id="report">Reported</span>;
  } else {
    reported = <button id="report" className="commentButton review-button" onClick={(e) => handleClick(e, comment)}>Report as inappropriate</button>;
  }

  return (
    <div className="comment-container" id={`${comment.id}`}>
      <div className="user-container">
        <div className="user bold">{comment.user.username}</div>
        <div className="userLocation">{comment.user.location}</div>
        <div className="user">
          {comment.user.totalreviews > 1 ? 'Reviews' : 'Review'}
          <span className="bold">&nbsp;{comment.user.totalreviews}</span>
        </div>
      </div>
      <div className="review-text-container">
        <div className="review-text-header">
          <div className="commentRating">
            <div className="starRating">
              <div className="review-empty-stars" />
              <div className="review-full-stars" style={{ width: `${(comment.rating / 5) * 100}%` }} />
            </div>
            <div className="reviewTime">{` · ${time}`}</div>
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
          {helpful}
          {reported}
        </div>
      </div>
      <div className="optional-rating-container">
        {Object.keys(comment.optional.rating).map((key, i) =>
          <ReviewOptionalRating key={i} category={key} rating={comment.optional.rating[key]} />,
        )}
      </div>
    </div>
  );
};

export default ReviewComment;
