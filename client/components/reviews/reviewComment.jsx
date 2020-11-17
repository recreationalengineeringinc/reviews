/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';

const ReviewComment = ({ comment }) => (
  <div className="comment-container">
    <div className="user-container">
      <div>{comment.user.username}</div>
      <div>{comment.user.location}</div>
      <div>
        {comment.user.totalreviews > 1 ? 'Review' : 'Reviews' }
        {comment.user.totalreviews}
      </div>
    </div>
    <div className="review-text-container">
      <div className="review-text-header">
        <div>Stars ·</div>
        <div>{comment.time} days ago</div>
      </div>
      <div className="review-title">{comment.title}</div>
      <div className="review-text">{comment.text}</div>
    </div>
  </div>
);

export default ReviewComment;
