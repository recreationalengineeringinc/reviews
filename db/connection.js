/* eslint-disable no-console */
const mysql = require('mysql');

module.exports.connection = mysql.createConnection({
  user: 'root',
  password: 'pass',
  database: 'rei',
});

module.exports.connection.connect((err) => {
  if (err) {
    console.log('Error connecting: ', err);
  } else {
    console.log('Connected!');
  }
});
