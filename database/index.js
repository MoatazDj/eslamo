const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nouha",
  database: "eslamoDB",
});

module.exports = connection;
