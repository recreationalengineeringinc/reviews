/* eslint-disable no-console */
const mysql = require('mysql');
const user = require('./userInfo.js');

const profile = Object.assign(user, { database: 'rei' });
const connection = mysql.createConnection(profile);

connection.connect((err) => {
  if (err) {
    console.log('Error connecting: ', err);
  } else {
    console.log('Connected!');
  }
});

module.exports.connection = connection;
