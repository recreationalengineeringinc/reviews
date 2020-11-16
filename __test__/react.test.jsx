/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow, render } from 'enzyme';

import Reviews from '../client/components/reviews';

describe('<Reviews /> to have text.', () => {
  it('Reviews has text.', () => {
    const wrapper = mount(<Reviews />);

    expect(wrapper.find('h2')).toIncludeText('Reviews');
  });
});

describe('<Reviews /> to have company in state.', () => {
  it('Reviews state has product.', () => {
    const wrapper = render(<Reviews />);

    expect(wrapper.state('product')).toHaveProperty('company');
  });
});
