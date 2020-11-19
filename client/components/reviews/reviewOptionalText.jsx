/* eslint-disable no-else-return */
import React from 'react';

const ReviewOptionalText = ({ category, answer }) => {
  if (answer === null || typeof answer === 'object') {
    return null;
  } else {
    return (
      <div className={`${category} optional`}>
        <span className="category bold">{category}</span>
        <span className="space"> &nbsp;</span>
        <span className="answer">{answer}</span>
      </div>
    );
  }
};

export default ReviewOptionalText;
