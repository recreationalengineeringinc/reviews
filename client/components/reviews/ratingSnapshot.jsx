import React from 'react';

const RatingSnapshot = (props) => {
  console.log('1', props.reviewsCount);
  return (
    <div>
      <div class="histogram-header">
        <h4>Rating Snapshot</h4>
        <p>Select a row below to filter reviews.</p>
      </div>
      <div id="5stars">5 <span id="star">★</span> ... bar ... {props.reviewsCount[5]}</div>
      <div id="4stars">4 <span id="star">★</span> ... bar ... {props.reviewsCount[4]}</div>
      <div id="3stars">3 <span id="star">★</span> ... bar ... {props.reviewsCount[3]}</div>
      <div id="2stars">2 <span id="star">★</span> ... bar ... {props.reviewsCount[2]}</div>
      <div id="1stars">1 <span id="star">★</span> ... bar ... {props.reviewsCount[1]}</div>
    </div>
  )
};

export default RatingSnapshot;
