/*  Execute on command line:
    mysql -u root -p < schema.sql
    to create db and tables.      */

DROP DATABASE IF EXISTS rei;
CREATE DATABASE rei;
USE rei;

CREATE TABLE products (
  id INT unsigned NOT NULL AUTO_INCREMENT,
  company VARCHAR(50) NOT NULL,
  name VARCHAR(100) NOT NULL,
  type VARCHAR(10) NOT NULL,
  gender VARCHAR(1),
  photo VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT unsigned NOT NULL AUTO_INCREMENT,
  name VARCHAR(25) NOT NULL,
  email VARCHAR(255) NOT NULL,
  location VARCHAR(50),
  PRIMARY KEY (id)
);

/* can i have mysql say if this will exist for certain */
CREATE TABLE reviews (
  id INT unsigned NOT NULL AUTO_INCREMENT,
  product_id INT unsigned NOT NULL,
  user_id INT unsigned NOT NULL,
  rating TINYINT NOT NULL,
  title VARCHAR(50) NOT NULL,
  text TEXT(10000) NOT NULL,
  recommended BOOLEAN,
  age VARCHAR(15),
  best_for VARCHAR(255),
  experience_level VARCHAR(15),
  typical_shoe_size VARCHAR(15),
  height VARCHAR(20),
  weight_range VARCHAR(25),
  ease_of_use_rating TINYINT,
  ease_of_assembly_rating TINYINT,
  width_rating TINYINT,
  product_weight_rating TINYINT,
  overall_fit_rating TINYINT,
  warmth_rating TINYINT,
  body_type VARCHAR(15),
  PRIMARY KEY (id),

  FOREIGN KEY (product_id) REFERENCES products (id)
      ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id)
      ON UPDATE CASCADE ON DELETE CASCADE
);

-- 5 Hardcoded Products
INSERT INTO products (id, company, name, type, gender, photo)
  VALUES (1, "Arc'teryx", "Women's Andessa Down Jacket", "clothing", "F", "https://s3-us-west-1.amazonaws.com/rei.review.photos/1.jpeg");
INSERT INTO products (id, company, name, type, gender, photo)
  VALUES (2, "Patagonia", "Nano Puff Insulated Hoodie - Men's", "clothing", "M", "https://s3-us-west-1.amazonaws.com/rei.review.photos/2.jpeg");
INSERT INTO products (id, company, name, type, gender, photo)
  VALUES (3, "Outdoor Research", "Bug Bivy", "tent", null, "https://s3-us-west-1.amazonaws.com/rei.review.photos/3.jpeg");
INSERT INTO products (id, company, name, type, gender, photo)
  VALUES (4, "REI Co-op", "Kingdom 6 Tent", "tent", null, "https://s3-us-west-1.amazonaws.com/rei.review.photos/4.jpeg");
INSERT INTO products (id, company, name, type, gender, photo)
  VALUES (5, "Black Diamond", "Momentum Climbing Shoes - Ash - Men's", "shoes", "M", "https://s3-us-west-1.amazonaws.com/rei.review.photos/5.jpeg");
