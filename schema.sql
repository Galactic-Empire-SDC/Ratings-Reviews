DROP DATABASE IF EXISTS ratings;
CREATE DATABASE ratings;

\c ratings;

DROP SCHEMA IF EXISTS ratingsdata;
CREATE SCHEMA ratingsdata;

DROP TABLE IF EXISTS review CASCADE;
CREATE TABLE review (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL UNIQUE,
  rating INT NOT NULL,
  date TIMESTAMP NOT NULL,
  summary TEXT NOT NULL,
  body TEXT NOT NULL,
  recommend BOOLEAN NOT NULL,
  reported BOOLEAN NOT NULL,
  reviewer_email TEXT NOT NULL,
  response TEXT NOT NULL,
  helpfulness INT NOT NULL
);

DROP TABLE IF EXISTS characteristic CASCADE;
CREATE TABLE characteristic (
  id SERIAL PRIMARY KEY,
  product_id INT references review(product_id),
  name TEXT NOT NULL
);

DROP TABLE IF EXISTS characteristic_reviews CASCADE;
CREATE TABLE characteristic_reviews (
  id SERIAL PRIMARY KEY,
  characteristic_id INT references characteristic(id),
  review_id INT references review(id),
  value INT NOT NULL
);

DROP TABLE IF EXISTS review_photos CASCADE;
CREATE TABLE review_photos (
  id SERIAL PRIMARY KEY,
  review_id INT references review(id),
  url TEXT NOT NULL
);
