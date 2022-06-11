const { Client } = require('pg');
require('dotenv').config();

const db = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

db.connect();

const getAllReviews = (req, res) => {
  const queryString = `SELECT * FROM get_review_data(${req.query.product_id}, ${req.query.count}, ${req.query.page}) `;
  db.query(queryString).then((result) => {
    res.status(200);
    res.send(result.rows);
  }).catch(() => {
    res.status(500);
    res.send('Error: invalid product_id provided: ');
  });
};

const getMetaReview = (req, res) => {
  console.log('inside getMetaReview');
  console.log(req.query);
  let queryString = `SELECT * FROM get_meta_data(${req.query.product_id})`;
  db.query(queryString).then((result) => {
    res.status(200);
    res.send(result.rows);
  }).catch(() => {
    res.status(500);
    res.send('Error: invalid product_id provided: ');
  });
};

module.exports = {
  getAllReviews,
  getMetaReview,
};
