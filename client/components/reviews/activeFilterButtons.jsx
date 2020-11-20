/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';

const ActiveFilterButton = (props) => (
  <button type="button" className="activeFilter" onClick={(e) => props.filterReviews(e, props.clearId, false)}>
    {props.clearId} stars <i className="fa fa-times-circle" />
  </button>
);

export default ActiveFilterButton;
