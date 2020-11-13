/* eslint-disable no-loop-func */
const faker = require('faker');

const query = require('./seed_data.js');
const db = require('./db/connection.js');

const productType = ['clothing', 'tent', 'shoes'];
const gender = ['M', 'F'];

const random = (num) => (
  Math.floor(Math.random() * num)
);

const makeUsers = (amount) => {
  let name;
  let email;
  let location;
  let insert;

  for (let i = 1; i <= amount; i += 1) {
    name = faker.internet.userName();
    email = faker.internet.email();
    location = faker.fake('{{address.city}}, {{address.stateAbbr}}');
    insert = query.generateUser(i, name, email, location);
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
  const reviews = [1, 50, 100, 200, 500];

  for (let i = 6; i <= amount + 5; i += 1) {
    company = faker.company.companyName();
    name = faker.commerce.productName();
    type = productType[random(productType.length)];
    productGender = (type === 'tent') ? null : gender[random(2)];
    photo = faker.image.imageUrl(null, null, 'people', true);
    insert = query.generateProduct(i, company, name, type, productGender, photo);
    db.connection.query(insert, (err) => {
      if (err) {
        console.log(err);
      } else {
        makeReviews(random(reviews[random(5)]), i, type, productGender, 100);
      }
    });
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
