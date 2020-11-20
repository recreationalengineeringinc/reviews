/* eslint-disable no-console */
/* eslint-disable no-loop-func */
const faker = require('faker');

const query = require('./seed_data.js');
const db = require('./db/connection.js');

const productType = ['clothing', 'tent', 'shoes'];
const gender = ['M', 'F'];

const random = (num, skew = 1) => (
  Math.floor(Math.random() ** skew * num)
);

const makeUsers = (amount) => {
  let name;
  let email;
  let location;
  let totalReviews;
  let insert;

  for (let i = 1; i <= amount; i += 1) {
    name = faker.internet.userName();
    email = faker.internet.email();
    location = faker.fake('{{address.city}}, {{address.stateAbbr}}');
    totalReviews = random(100) + 1;
    insert = query.generateUser(i, name, email, location, totalReviews);
    db.connection.query(insert);
  }
};

const makeReviews = (amount, product, type, productGender, userAmount) => {
  let insert;
  for (let i = 0; i < amount; i += 1) {
    insert = query.generateReview(product, type, productGender, userAmount);
    db.connection.query(insert);
  }
};
// Generate Products 95 more products
const makeProducts = (amount) => {
  let company;
  let name;
  let type;
  let productGender;
  let photo;
  let insert;
  const reviews = [1, 10, 20, 50, 100, 200, 500, 1000];

  // Hard-coding reviews for set products defined as group.
  makeReviews(random(reviews[random(reviews.length)]), 1, 'clothing', 'F', 100);
  makeReviews(random(reviews[random(reviews.length)]), 2, 'clothing', 'M', 100);
  makeReviews(random(reviews[random(reviews.length)]), 3, 'tent', null, 100);
  makeReviews(random(reviews[random(reviews.length)]), 4, 'tent', null, 100);
  makeReviews(random(reviews[random(reviews.length)]), 5, 'shoes', 'M', 100);

  for (let i = 6; i <= amount + 5; i += 1) {
    company = faker.company.companyName();
    name = faker.commerce.productName();
    type = productType[random(productType.length)];
    productGender = (type === 'tent') ? null : gender[random(2)];
    photo = faker.image.imageUrl(null, null, 'people', true);
    insert = query.generateProduct(i, company, name, type, productGender, photo);
    db.connection.query(insert);
    makeReviews(random(reviews[random(reviews.length * 0.8)]), i, type, productGender, 100);
  }
};

const seed = async () => {
  await makeUsers(100);
};

seed()
  .then(() => {
    makeProducts(95);
  })
  .catch((err) => {
    throw err;
  });
