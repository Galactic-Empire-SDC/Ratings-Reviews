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
  const queryString = `SELECT * FROM get_review_data(${req.query.product_id}, ${req.query.count || 5}, ${req.query.page || 1}) `;
  db.query(queryString).then((result) => {
    res.status(200);
    res.send(result.rows);
  }).catch((err) => {
    res.status(500);
    res.send(err);
  });
};

const getMetaReview = (req, res) => {
  const queryString = `SELECT * FROM get_meta_data(${req.query.product_id})`;
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
