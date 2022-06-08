DROP DATABASE IF EXISTS ratings;
CREATE DATABASE ratings;

\c ratings;

DROP SCHEMA IF EXISTS ratingsdata;
CREATE SCHEMA ratingsdata;

DROP TABLE IF EXISTS review CASCADE;
CREATE TABLE review (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  rating INT NOT NULL,
  review_date TEXT NOT NULL,
  summary TEXT NOT NULL,
  body TEXT NOT NULL,
  recommend BOOLEAN NOT NULL,
  reported BOOLEAN NOT NULL,
  reviewer_name TEXT NOT NULL,
  reviewer_email TEXT NOT NULL,
  response TEXT NOT NULL,
  helpfulness INT NOT NULL
);

DROP TABLE IF EXISTS characteristic CASCADE;
CREATE TABLE characteristic (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  name TEXT NOT NULL
);

DROP TABLE IF EXISTS characteristic_reviews CASCADE;
CREATE TABLE characteristic_reviews (
  id SERIAL PRIMARY KEY,
  characteristic_id INT references characteristic(id),
  review_id INT references review(id),
  char_value INT NOT NULL
);

DROP TABLE IF EXISTS review_photos CASCADE;
CREATE TABLE review_photos (
  id SERIAL PRIMARY KEY,
  review_id INT references review(id),
  review_url TEXT NOT NULL
);

COPY review (id, product_id, rating, review_date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness)
FROM '/Users/andyluu/Desktop/AtelierSDC/reviews.csv'
DELIMITER ','
CSV HEADER;

COPY characteristic (id, product_id, name)
FROM '/Users/andyluu/Desktop/AtelierSDC/characteristics.csv'
DELIMITER ','
CSV HEADER;

COPY characteristic_reviews (id, characteristic_id, review_id, char_value)
FROM '/Users/andyluu/Desktop/AtelierSDC/characteristic_reviews.csv'
DELIMITER ','
CSV HEADER;

COPY review_photos (id, review_id, review_url)
FROM '/Users/andyluu/Desktop/AtelierSDC/reviews_photos.csv'
DELIMITER ','
CSV HEADER;