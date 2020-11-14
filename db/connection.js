/* eslint-disable no-console */
const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'pass',
  database: 'rei',
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting: ', err);
  } else {
    console.log('Connected!');
  }
});

module.exports.connection = connection;
