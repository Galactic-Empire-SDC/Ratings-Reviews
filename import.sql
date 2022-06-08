COPY review (id, product_id, rating, date, summary, body, recommend, reported, reviewer_email, response, helpfulness)
FROM '/Users/andyluu/Desktop/Atelier\ SDC/reviews.csv'
DELIMITER ','
CSV HEADER;

COPY characteristic (id, product_id, name)
FROM '/Users/andyluu/Desktop/Atelier\ SDC/characteristics.csv'
DELIMITER ','
CSV HEADER;

COPY characteristic_reviews (id, characteristic_id, review_id, value)
FROM '/Users/andyluu/Desktop/Atelier\ SDC/characteristic_reviews.csv'
DELIMITER ','
CSV HEADER;

COPY review_photos (id, review_id, url)
FROM '/Users/andyluu/Desktop/Atelier\ SDC/reviews_photos.csv'
DELIMITER ','
CSV HEADER;