/*  Execute on command line:
    mysql -u root -p < schema.sql
    to create db and tables.      */

CREATE DATABASE IF NOT EXISTS rei;
USE rei;

CREATE TABLE products (
  id INT unsigned NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  type VARCHAR(50) NOT NULL,
  gender VARCHAR(1),
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
