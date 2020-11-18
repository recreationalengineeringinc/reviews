/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import RatingSnapshot from './reviews/ratingSnapshot';
import ReviewsList from './reviews/reviewsList';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      reviews: [],
      renderedReviews: [],
      reviewsCount: {},
      overall: {
        rating: { total: 0, count: 0 },
        easeOfUse: { total: 0, count: 0 },
        easeOfAssembly: { total: 0, count: 0 },
        width: { total: 0, count: 0 },
        productWeight: { total: 0, count: 0 },
        overallFit: { total: 0, count: 0 },
        warmth: { total: 0, count: 0 },
      },
      renderLength: 12,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get(`${window.location.pathname}reviews`)
      .then((results) => {
        const result = results.data;
        const reviews = [];
        // Parsing Data in front end.
        for (let i = 0; i < result.length; i += 1) {
          const review = {};
          if (i === 0) {
            this.state.product = {
              company: result[i].company,
              name: result[i].name,
              type: result[i].type,
              photo: result[i].photo,
            };
          }
          if (result[i].text === undefined) { break; }
          // User Info
          review.user = {};
          review.user.totalreviews = result[i].total_reviews;
          review.user.location = result[i].location;
          review.user.username = result[i].username;
          // Review Info
          review.id = result[i].id;
          review.rating = result[i].rating;
          review.time = result[i].review_time;
          review.title = result[i].title;
          review.text = result[i].text;
          review.reported = result[i].reported;
          review.recommended = result[i].recommended;
          review.helpful = {};
          review.helpful.yes = result[i].helpful_yes;
          review.helpful.no = result[i].helpful_no;
          review.helpful.clicked = result[i].helpful_clicked;
          review.optional = {};
          review.optional['Age'] = result[i].age;
          review.optional['Best for:'] = result[i].best_for;
          review.optional['Experience Level'] = result[i].experience_level;
          review.optional['Typical Shoe Size'] = result[i].typical_shoe_size;
          review.optional['Height'] = result[i].height;
          review.optional['Weight Range'] = result[i].weight_range;
          review.optional['Body Type'] = result[i].body_type;
          review.optional.rating = {};
          review.optional.rating.easeOfUse = result[i].ease_of_use_rating;
          review.optional.rating.easeOfAssembly = result[i].ease_of_assembly_rating;
          review.optional.rating.width = result[i].width_rating;
          review.optional.rating.productWeight = result[i].product_weight_rating;
          review.optional.rating.overallFit = result[i].overall_fit_rating;
          review.optional.rating.wamrth = result[i].warmth_rating;
          // Overall Info
          this.increase('rating', result[i].rating);
          // Optional Review Stats
          if (result[i].age !== null) {
            this.increase('easeOfUse', result[i].ease_of_use_rating);
            this.increase('easeOfAssembly', result[i].ease_of_assembly_rating);
            this.increase('width', result[i].width_rating);
            this.increase('productWeight', result[i].product_weight_rating);
            this.increase('overallFit', result[i].overall_fit_rating);
            this.increase('warmth', result[i].warmth_rating);
          }
          reviews.push(review);
        }
        this.state.reviews = reviews;
        this.setState((prevState) => ({ renderedReviews: prevState.reviews.slice(0, this.state.renderLength) }));
      });
  }

  handleClick(e, comment = {}) {
    e.preventDefault();
    const target = e.target.id;
    const { reviews } = this.state;
    if (target === 'yes' || target === 'no' || target === 'report') {
      for (let i = 0; i < reviews.length; i += 1) {
        if (reviews[i].id === comment.id) {
          if (target === 'report') {
            reviews[i].reported = true;
            break;
          } else {
            reviews[i].helpful[target] += 1;
            reviews[i].helpful.clicked = true;
            break;
          }
        }
      }
      // setTimeout(() => this.setState((prevState) => ({ renderedReviews: prevState.reviews.slice(0, this.state.renderLength) })), 250);
      this.setState((prevState) => ({ renderedReviews: prevState.reviews.slice(0, this.state.renderLength) }));
    }
  }

  // 1 - 12, 42 +30...
  increase(prop, num) {
    const { overall } = this.state;
    const { reviewsCount } = this.state;
    if (prop === 'rating') {
      if (reviewsCount[num]) {
        reviewsCount[num] += 1;
      } else {
        reviewsCount[num] = 1;
      }
    }
    if (num !== null) {
      overall[prop].total += num;
      overall[prop].count += 1;
    }
  }

  render() {
    const totalReviews = this.state.overall.rating.count;

    return (
      <div>
        <h2 id="reviewsHeader">Reviews</h2>
        <div>
          <button id="writeReview" type="button" onClick={this.handleClick}>Write a review</button>
        </div>
        <RatingSnapshot reviewsCount={this.state.reviewsCount} totalReviews={totalReviews} />
        <ReviewsList reviews={this.state.renderedReviews} totalReviews={totalReviews} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Reviews;
