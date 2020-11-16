/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';

import Reviews from '../client/components/reviews';

describe('<Reviews /> to have text.', () => {
  it('Reviews has text.', () => {
    const wrapper = shallow(<Reviews />);

    expect(wrapper.find('h2')).toIncludeText('Reviews');
  });
});

describe('<RatingSnapshot /> to calculate correct %.', () => {
  it('Reviews state to have property.', () => {
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
    expect(wrapper.state('reviewsCount')).toHaveProperty('1');
  });
});
