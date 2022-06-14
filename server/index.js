const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const db = require('./reviewDB');

const app = express();
module.exports.app = app;

app.use(express.json());
app.use(morgan('tiny'));

app.listen(process.env.PORT);
console.log(`Server listening on port: ${process.env.PORT}`);

app.get('/reviews', (req, res) => {
  db.getAllReviews(req, res);
});

app.get('/reviews/meta', (req, res) => {
  db.getMetaReview(req, res);
});

app.get(`/${process.env.loaderIO}`, (req, res) => {
  res.send(process.env.loaderIO);
});
