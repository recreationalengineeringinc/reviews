import React from 'react'
import { mount, shallow } from 'enzyme'

import Reviews from '../client/components/reviews.jsx'

describe('<Reviews />', () => {
  it('', () => {
    const wrapper = mount(<Reviews />);

    expect(wrapper.find('div')).toIncludeText('Hello world');
  });
});