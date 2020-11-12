var faker = require('faker');

var product_type = ['clothing', 'tent', 'shoes'];
var gender = [null, 'M', 'F'];

var generate_product = function (id, name, type, gender) {
  let query = `INSERT INTO products (id, name, type, gender)
  VALUES (${id}, "${name}", "${type}", ${gender ? `"${gender}"` : null});`;

  return query;
};

var generate_user = function (id, name, email, location) {
  let query = `INSERT INTO users (id, name, email, location)
  VALUES (${id}, "${name}", "${email}", ${location ? `"${location}"` : null});`;

  return query;
};

var random = function (num) {
  return Math.floor(Math.random() * num);
};

var generate_review = function (product_id, product_type, gender) {
  let user_id = 1;
  let rating = random(5) + 1;
  let title = faker.lorem.words(random(5) + 1);
  let text = faker.lorem.sentences(random(15) + 1) + faker.lorem.paragraphs(random(1));
  let recommended = [null, true, false];
  recommended = recommended[random(recommended.length)];
  let age = [null, 'Under 18', '18 to 24', '25 to 34', '35 to 44', '45 to 54', '55 to 64', '65 to 74', '75 or over'];
  age = age[random(age.length)];

  //Initializing data even if null or else query will not generate.
  let best_for, experience_level, typical_shoe_size, height, weight_range, ease_of_use_rating, ease_of_assembly_rating, width_rating, product_weight_rating, overall_fit_rating, warmth_rating, body_type;
  if (random(1)) {
    if (product_type === 'shoes') {
      overall_fit_rating = random(3) + 1;
      width_rating = random(3) + 1;
      typical_shoe_size = [];
      typical_shoe_size.push('Size Not Listed');
      typical_shoe_size = typical_shoe_size[random(typical_shoe_size.length)];
      best_for = ['Gym Climbing', 'Bouldering', 'Sport Climbing', 'Trad Climbing', 'Mountaineering', 'Canyoneering'];
      best_for = best_for[random(best_for.length)];
      for (let i = 0; i < 11; i++) {
        typical_shoe_size.push(`Mens ${7 + i * 0.5}`);
      }
      for (let i = 0; i < 11; i++) {
        typical_shoe_size.push(`Womens ${5 + i * 0.5}`);
      }
      for (let i = 0; i < 11; i++) {
        typical_shoe_size.push(`Kids ${1 + i}`);
      }
      experience_level = ['Casual', 'Beginner', 'Experienced', 'Competitive'];
      experience_level = experience_level[random(experience_level.length)];
    }
    if (product_type === 'clothing') {
      overall_fit_rating = random(3) + 1;
      warmth_rating = random(3) + 1;
      product_weight_rating = random(3) + 1;
      height = ['Shorter than 5']
      for (let i = 0; i < 12; i++) {
        height.push(`5'${i}"`);
      }
      for (let i = 0; i < 6; i++) {
        height.push(`6'${i}"`);
      }
      height.push(`Taller than 6'5"`);
      height = height[random(height.length)];
      if (gender === 'F') {
        body_type = ['Curvy', 'Slender', 'Athletic', 'Petite'];
        body_type = body_type[random(body_type.length)];
      }
      experience_level = ['Casual', 'Beginner', 'Experienced', 'Competitive'];
      experience_level = experience_level[random(experience_level.length)];
    }
    if (product_type === 'tent') {
      ease_of_assembly_rating = random(3) + 1;
      best_for = [null, 'Backpacking', 'Car Camping', 'RV Camping', 'Backyard Use', 'Emergency Preparedness', 'Mountaineering', 'Overlanding'];
      let best;
      let num = random(3);
      for (let i = 0; i < num; i++) {
        best.push(best_for.splice(random(best_for.length), 1));
      }
      best_for = best.join(', ');
      height = ['Shorter than 5']
      for (let i = 0; i < 12; i++) {
        height.push(`5'${i}"`);
      }
      for (let i = 0; i < 6; i++) {
        height.push(`6'${i}"`);
      }
      height.push(`Taller than 6'5"`);
      height = height[random(height.length)];
      weight_range = ['Less than 100 lbs'];
      for (let i = 0; i < 12; i++) {
        weight_range.push(`${100 + i * 25} - ${125 + i * 25} lbs`);
      }
      weight_range.push('More than 400 lbs');
      weight_range = weight_range[random(weight_range.length)];
    }
  }
  let query = `INSERT INTO reviews (product_id, user_id, rating, title, text, recommended, age, best_for, experience_level, typical_shoe_size, height, weight_range, ease_of_use_rating, ease_of_assembly_rating, width_rating, product_weight_rating, overall_fit_rating, warmth_rating, body_type)
  VALUES (
    ${product_id},
    ${user_id},
    ${rating},
    "${title}",
    "${text}",
    ${recommended},
    ${age ? `"${age}"` : null},
    ${best_for ? `"${best_for}"` : null},
    ${experience_level ? `"${experience_level}"` : null},
    ${typical_shoe_size ? `"${typical_shoe_size}"` : null},
    ${height ? `"${height}"` : null},
    ${weight_range ? `"${weight_range}"` : null},
    ${ease_of_use_rating ? ease_of_use_rating : null},
    ${ease_of_assembly_rating ? ease_of_assembly_rating : null},
    ${width_rating ? width_rating : null},
    ${product_weight_rating ? product_weight_rating : null},
    ${overall_fit_rating ? overall_fit_rating : null},
    ${warmth_rating ? warmth_rating : null},
    ${body_type ? `"${body_type}"` : null});`

  return query;
};

console.log(generate_review(1, 'shoes', null));

module.exports.generate_product = generate_product;
module.exports.generate_user = generate_user;
module.exports.generate_review = generate_review;
