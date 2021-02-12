const mysql = require('mysql2');

const config = require('../config/config.json');

const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  database: config.database,
  password: config.password,
});



// const pool = mysql.createPool({
//   host: config.host,
//   user: config.user,
//   password: config.password,
//   database: config.database,
//   dialect: "mysql",
//    pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });

module.exports = pool.promise();

