/* eslint-disable camelcase */
const faker = require('faker');

const generateProduct = (id, company, name, type, gender, photo) => {
  const query = `INSERT INTO products (id, company, name, type, gender, photo)
  VALUES (${id}, "${company}", "${name}", "${type}", ${gender ? `"${gender}"` : null}, "${photo}");`;

  return query;
};

const generateUser = (id, name, email, location, totalReviews) => {
  const query = `INSERT INTO users (id, name, email, location, total_reviews)
  VALUES (${id}, "${name}", "${email}", ${location ? `"${location}"` : null}, ${totalReviews});`;

  return query;
};

const random = (num) => (
  Math.floor(Math.random() * num)
);

const generateReview = (product_id, product_type, gender, userAmount) => {
  const user_id = random(userAmount) + 1;
  const rating = random(5) + 1;
  const title = faker.lorem.words(random(4) + 1);
  const text = faker.lorem.sentences(random(15) + 1) + faker.lorem.paragraphs(random(1));
  let recommended = [null, true, false];
  recommended = recommended[random(recommended.length)];
  let age = ['Under 18', '18 to 24', '25 to 34', '35 to 44', '45 to 54', '55 to 64', '65 to 74', '75 or over'];
  const review_time = random(1000) + 1;
  // Initializing data even if null or else query will not generate.
  let best_for;
  let experience_level;
  let typical_shoe_size;
  let height;
  let weight_range;
  let ease_of_use_rating;
  let ease_of_assembly_rating;
  let width_rating;
  let product_weight_rating;
  let overall_fit_rating;
  let warmth_rating;
  let body_type;
  // Intitializing Experience level
  experience_level = ['Casual', 'Beginner', 'Experienced', 'Competitive'];
  // Intitializing Shoe Size
  typical_shoe_size = [];
  typical_shoe_size.push('Size Not Listed');
  for (let i = 0; i < 11; i += 1) {
    typical_shoe_size.push(`Mens ${7 + i * 0.5}`);
  }
  for (let i = 0; i < 11; i += 1) {
    typical_shoe_size.push(`Womens ${5 + i * 0.5}`);
  }
  for (let i = 0; i < 11; i += 1) {
    typical_shoe_size.push(`Kids ${1 + i}`);
  }
  // Initializing Height
  height = ['Shorter than 5'];
  for (let i = 0; i < 12; i += 1) {
    height.push(`5'${i}\\"`);
  }
  for (let i = 0; i < 6; i += 1) {
    height.push(`6'${i}\\"`);
  }
  height.push('Taller than 6\'5\\"');
  // Intializing Weight
  weight_range = ['Less than 100 lbs'];
  for (let i = 0; i < 12; i += 1) {
    weight_range.push(`${100 + i * 25} - ${125 + i * 25} lbs`);
  }
  weight_range.push('More than 400 lbs');

  if (random(3)) {
    age = age[random(age.length)];
    if (product_type === 'shoes') {
      overall_fit_rating = random(3) + 1;
      width_rating = random(3) + 1;
      typical_shoe_size = typical_shoe_size[random(typical_shoe_size.length)];
      best_for = ['Gym Climbing', 'Bouldering', 'Sport Climbing', 'Trad Climbing', 'Mountaineering', 'Canyoneering'];
      best_for = best_for[random(best_for.length)];
      experience_level = experience_level[random(experience_level.length)];
    } else if (product_type === 'clothing') {
      overall_fit_rating = random(3) + 1;
      warmth_rating = random(3) + 1;
      product_weight_rating = random(3) + 1;
      height = height[random(height.length)];
      if (gender === 'F') {
        body_type = ['Curvy', 'Slender', 'Athletic', 'Petite'];
        body_type = body_type[random(body_type.length)];
      }
    } else if (product_type === 'tent') {
      ease_of_assembly_rating = random(3) + 1;
      best_for = ['Backpacking', 'Car Camping', 'RV Camping', 'Backyard Use', 'Emergency Preparedness', 'Mountaineering', 'Overlanding'];
      const best = [];
      const num = random(3);
      for (let i = 0; i < num; i += 1) {
        best.push(best_for.splice(random(best_for.length), 1));
      }
      best_for = best.join(', ');
      height = height[random(height.length)];
      weight_range = weight_range[random(weight_range.length)];
    }
  }
  const query = `INSERT INTO reviews (product_id, user_id, rating, title, text, recommended, age, best_for, review_time, experience_level, typical_shoe_size, height, weight_range, ease_of_use_rating, ease_of_assembly_rating, width_rating, product_weight_rating, overall_fit_rating, warmth_rating, body_type)
  VALUES (
    ${product_id},
    ${user_id},
    ${rating},
    "${title}",
    "${text}",
    ${recommended},
    ${typeof age === 'string' ? `"${age}"` : null},
    ${best_for ? `"${best_for}"` : null},
    ${review_time},
    ${typeof experience_level === 'string' ? `"${experience_level}"` : null},
    ${typeof typical_shoe_size === 'string' ? `"${typical_shoe_size}"` : null},
    ${typeof height === 'string' ? `"${height}"` : null},
    ${typeof weight_range === 'string' ? `"${weight_range}"` : null},
    ${ease_of_use_rating || null},
    ${ease_of_assembly_rating || null},
    ${width_rating || null},
    ${product_weight_rating || null},
    ${overall_fit_rating || null},
    ${warmth_rating || null},
    ${body_type ? `"${body_type}"` : null});`;

  return query;
};

module.exports.generateProduct = generateProduct;
module.exports.generateUser = generateUser;
module.exports.generateReview = generateReview;

// console.log(generate_product(1, `Arc'teryx Women's Andessa Down Jacket`, 'clothing', 'F', 'https://s3-us-west-1.amazonaws.com/rei.review.photos/1.jpeg'));
// console.log(generate_product(2, `Patagonia Nano Puff Insulated Hoodie - Men's`, 'clothing', 'M', 'https://s3-us-west-1.amazonaws.com/rei.review.photos/2.jpeg'));
// console.log(generate_product(3, `Outdoor Research Bug Bivy`, 'tent', null, 'https://s3-us-west-1.amazonaws.com/rei.review.photos/3.jpeg'));
// console.log(generate_product(4, `REI Co-op Kingdom 6 Tent`, 'tent', null, 'https://s3-us-west-1.amazonaws.com/rei.review.photos/4.jpeg'));
// console.log(generate_product(5, `Black Diamond Momentum Climbing Shoes - Ash - Men's`, 'shoes', 'M', 'https://s3-us-west-1.amazonaws.com/rei.review.photos/5.jpeg'));
