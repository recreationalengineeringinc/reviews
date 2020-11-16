import React from 'react';
import axios from 'axios';
import RatingSnapshot from './reviews/ratingSnapshot.jsx';

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
    };
  }

  componentDidMount() {
    axios.get(`${window.location.pathname}reviews`)
      .then((result) => {
        result = result.data;
        const reviews = [];
        const review = {};
        // Parsing Data in front end.
        for (let i = 0; i < result.length; i += 1) {
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
          review.user.age = result[i].age;
          review.user.totalreviews = result[i].total_reviews;
          review.user.location = result[i].location;
          review.user.username = result[i].username;
          // Review Info
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
          review.optional.bestFor = result[i].best_for;
          review.optional.experienceLevel = result[i].experience_level;
          review.optional.typicalShoeSize = result[i].typical_shoe_size;
          review.optional.height = result[i].height;
          review.optional.weightRange = result[i].weight_range;
          review.optional.bodyType = result[i].body_type;
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
        this.setState({renderedReviews: this.state.reviews.slice(0, 12)});
      });
  }

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
    return (
      <div>
        <h2>Reviews</h2>
        <div>
          <button id="writeReview" type="button">Write a review</button>
        </div>
        <RatingSnapshot reviewsCount={this.state.reviewsCount} />
      </div>
    );
  }
}

export default Reviews;
