/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';

import Reviews from '../client/components/reviews';
import RatingSnapshot from '../client/components/reviews/ratingSnapshot';

describe('<Reviews /> to have text.', () => {
  it('Reviews has text.', () => {
    const wrapper = shallow(<Reviews />);

    expect(wrapper.find('h2')).toIncludeText('Reviews');
  });
});

describe('<RatingSnapshot /> to recieve props from Review State.', () => {
  it('Reviews state to have properties passed.', () => {
    const wrapper = mount(<Reviews />);
    wrapper.setState({
      reviewsCount: {
        1: 10,
        2: 5,
        3: 15,
        4: 20,
        5: 50,
      },
    });
    expect(wrapper.find('RatingSnapshot').prop('reviewsCount')).toHaveProperty('1', 10);
  });

  it('Rating Snapshop calculates correct %', () => {
    const wrapper = mount(<RatingSnapshot reviewsCount="100" totalReviews={100} />);
    wrapper.setProps({
      reviewsCount: {
        1: 10,
        2: 5,
        3: 15,
        4: 20,
        5: 50,
      },
    });
    expect(wrapper.render().find('#5stars .percentageReview').prop('style')).toHaveProperty('width', '50%');
  });
});
