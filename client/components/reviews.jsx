/* eslint-disable dot-notation */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import RatingSnapshot from './reviews/ratingSnapshot';
import ReviewsList from './reviews/reviewsList';
import AverageRatings from './reviews/averageRatings';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      reviews: [],
      filteredReviews: [],
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
      filter: {
        bool: false,
        ratings: {},
        length: 0,
      },
    };
    this.listRef = React.createRef();
    this.scrollTo = null;
    this.handleClick = this.handleClick.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
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
          review.optional.rating.warmth = result[i].warmth_rating;
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

  // componentDidUpdate() {
  //   const list = this.listRef.current;
  //   // const scroll = {
  //   //   top: list.top,
  //   //   left: list.left,
  //   //   behavior: 'smooth',
  //   // };
  //   console.log(list.getBoundingClientRect());
  //   this.scrollTo = list.getBoundingClientRect().top;
  //   window.scrollTo(0, 4842.25);
  //   // window.scrollTo(0, list.getBoundingClientRect().top);
  // }

  handleClick(e, comment = {}, id) {
    e.preventDefault();
    const target = e.target.id || id;
    console.log(target);
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
      this.rerender();
    }
    if (target === 'loadMore') {
      if (this.state.filter.bool) {
        if (this.state.filteredReviews.length < this.state.renderLength + 30) {
          this.state.renderLength = this.state.filteredReviews.length;
        } else {
          this.state.renderLength += 30;
        }
        this.renrender();
      } else {
        if (reviews.length < this.state.renderLength + 30) {
          this.state.renderLength = reviews.length;
        } else {
          this.state.renderLength += 30;
        }
        this.rerender();
      }
    }
    if (target === 'clearFilter') {
      this.state.renderLength = 12;
      this.state.filter = {
        bool: false,
        ratings: {},
        length: 0,
      };
      this.rerender();
    }
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

  filterReviews(e, id, clear = true) {
    e.preventDefault();
    const { reviews, filter } = this.state;
    this.state.filter.ratings[id] = clear;
    if (!clear) {
      delete this.state.filter.ratings[id];
    }
    this.state.filteredReviews = [];
    this.state.renderLength = 12;
    this.state.filter.bool = true;
    this.state.filter.length = 0;
    for (let i = 0; i < reviews.length; i += 1) {
      if (filter.ratings[`${reviews[i].rating}`]) {
        this.state.filteredReviews.push(reviews[i]);
        this.state.filter.length += 1;
      }
    }
    this.rerender();
  }

  rerender() {
    if (this.state.filter.bool) {
      this.setState((prevState) => ({ renderedReviews: prevState.filteredReviews.slice(0, this.state.renderLength) }));
    } else {
      this.setState((prevState) => ({ renderedReviews: prevState.reviews.slice(0, this.state.renderLength) }));
    }
  }

  render() {
    const totalReviews = this.state.overall.rating.count;
    const { renderedReviews } = this.state;
    let loadMore;
    if (this.state.filter.bool) {
      if (this.state.renderLength < this.state.filteredReviews.length) {
        loadMore = (
          <button id="loadMore" type="button" onClick={this.handleClick}>
            Load more
          </button>
        );
      }
    } else if (this.state.renderLength < totalReviews) {
      loadMore = (
        <button id="loadMore" type="button" onClick={this.handleClick}>
          Load more
        </button>
      );
    } else {
      loadMore = null;
    }

    let reviewApp;
    if (totalReviews > 0) {
      reviewApp = (
        <div>
          <h2 id="reviewsHeader">Reviews</h2>
          <div>
            <button id="writeReview" type="button" onClick={this.handleClick}>Write a review</button>
          </div>
          <div className="overallRatingContainer">
            <RatingSnapshot reviewsCount={this.state.reviewsCount} totalReviews={totalReviews} filterReviews={this.filterReviews} />
            <AverageRatings overall={this.state.overall} />
          </div>
          <ReviewsList reviews={renderedReviews} totalReviews={totalReviews} handleClick={this.handleClick} filter={this.state.filter} />
          <div ref={this.listRef} className="loadMore-container">
            {loadMore}
          </div>
        </div>
      );
    } else {
      reviewApp = (
        <div className="firstReview">
          <h2 id="reviewsHeader">Reviews</h2>
          <div className="empty-stars starRating" />
          <div className="firstReviewComment">Be the first to review this product</div>
        </div>
      );
    }

    return (
      <div>
        {reviewApp}
      </div>
    );
  }
}

export default Reviews;
