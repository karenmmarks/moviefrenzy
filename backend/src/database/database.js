const mysql = require ('mysql');

function connect() {
    const con = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
      });
      
      return con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
}