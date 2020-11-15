import React from 'react';

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
    fetch(`${window.location.pathname}reviews`)
      .then((res) => res.json())
      .then(
        (result) => {
          const reviews = [];
          const review = {};
          const { overall } = this.state;
          // Parsing Data in front end.
          for (let i = 0; i < result.length; i += 1) {
            if (!i) {
              this.state.product = {
                company: result[i].company,
                name: result[i].name,
                type: result[i].type,
                photo: result[i].photo,
              };
            }
            if (result[i].text === undefined) { break; }
            // User Info
            review.user.age = result[i].age;
            review.user.totalreviews = result[i].totalreviews;
            review.user.location = result[i].location;
            review.user.username = result[i].username;
            // Review Info
            review.title = result[i].title;
            review.text = result[i].text;
            review.rating = result[i].rating;
            review.recommended = result[i].recommended;
            // Overall Info
            overall.rating.total += result[i].rating;
            overall.rating.count += 1;
            // Optional Review Stats
            if (result[i].age !== null) {

            }
          }
        },
      );
  }

  render() {
    return (
      <div>
        <h2>Reviews</h2>
        <div>
          <button>Write a review</button>

        </div>
      </div>
    );
  }
}

export default Reviews;
