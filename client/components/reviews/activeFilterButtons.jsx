import React from 'react';

const ActiveFilterButton = (props) => (
  <button className="activeFilter">{props.clearId} stars <i className="fa fa-times-circle" /></button>
);

export default ActiveFilterButton;
