const mysql = require("mysql2");

const pool = mysql.createPool({
  host : "localhost",
  username : "rool",
  password : "root",
  database : "airbnb"

});

module.exports =pool.promise();