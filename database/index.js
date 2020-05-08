const mysql = require('mysql');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'eslamoDB'
});


// Option 1: Passing parameters separately