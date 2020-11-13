/* eslint-disable no-console */
const express = require('express');
const db = require('../db/connection.js');

const app = express();
const port = 3004;

app.get('/product/:id/reviews', (req, res) => {
  db.connection.query(
    `SELECT reviews.*, products.*, users.name as username, users.location, users.totalreviews FROM reviews
    INNER JOIN products ON reviews.product_id=${req.params.id} AND reviews.product_id=products.id
    INNER JOIN users ON users.id=reviews.user_id`, (err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.header('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(result, 0, 1));
      }
    },
  );
});

app.get('/users', (req, res) => {
  db.connection.query('SELECT reviews.id FROM reviews', (err, result) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
