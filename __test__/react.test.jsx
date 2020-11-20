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

describe('Check click event of helpful and reported.', () => {
  const review = {
    id: 1,
    rating: 4,
    text: 'testing sucks',
    time: 4,
    title: 'why',
    optional: { rating: {} },
    user: {
      location: 'fake place',
      username: 'test',
      totalreviews: 1,
    },
    helpful: {
      yes: 10,
      no: 1,
      clicked: false,
    },
    reported: false,
  };

  it('Expect reported to be true after click.', () => {
    const wrapper = mount(<Reviews />);
    wrapper.setState({ renderedReviews: [review], reviews: [review] });
    expect(wrapper.state('renderedReviews')[0].reported).toBe(false);
    wrapper.find('#report').simulate('click');
    expect(wrapper.state('renderedReviews')[0].reported).toBe(true);
  });

  it('Expect helpful to be increment only by 1 after multiple clicks.', () => {
    const wrapper = mount(<Reviews />);
    wrapper.setState({ renderedReviews: [review], reviews: [review] });
    expect(wrapper.state('renderedReviews')[0].helpful.yes).toBe(10);
    wrapper.find('#yes').simulate('click');
    expect(wrapper.state('renderedReviews')[0].helpful.yes).toBe(11);
    wrapper.find('#yes').simulate('click');
    expect(wrapper.state('renderedReviews')[0].helpful.yes).toBe(11);
    expect(wrapper.state('renderedReviews')[0].helpful.no).toBe(1);
    wrapper.find('#no').simulate('click');
    expect(wrapper.state('renderedReviews')[0].helpful.no).toBe(1);
  });
});
