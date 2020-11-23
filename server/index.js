/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const db = require('../db/connection.js');

const app = express();
const port = 3004;
const publicDir = path.join(__dirname, '../public/');
app.use(morgan('dev'));
app.use('/reviews', express.static(publicDir));

app.get('*/product/:id/reviews', (req, res) => {
  db.connection.query(
    `SELECT products.*, reviews.*, users.name as username, users.location, users.total_reviews FROM reviews
    INNER JOIN products ON reviews.product_id=${req.params.id} AND reviews.product_id=products.id
    INNER JOIN users ON users.id=reviews.user_id
    ORDER BY reviews.review_time`, (err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.header('Content-Type', 'application/json');
        if (result.length) {
          res.status(200).send(JSON.stringify(result, 0, 1));
        } else {
          db.connection.query(`SELECT * FROM products WHERE id=${req.params.id}`, (err2, result2) => {
            if (err2) {
              res.sendStatus(404);
            } else {
              res.status(200).send(JSON.stringify(result2, 0, 1));
            }
          });
        }
      }
    },
  );
});

// app.get('/api/users', (req, res) => {
//   db.connection.query('SELECT reviews.id FROM reviews', (err, result) => {
//     if (err) {
//       res.sendStatus(404);
//     } else {
//       res.status(200).json(result);
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/product/1/`);
});
