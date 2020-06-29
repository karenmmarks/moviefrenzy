const mysql = require('mysql');

function connect() {
  const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });

  con.connect(function (err) {
    if (err) throw err;
  });
  return con;
}

module.exports = {
  insert (table, columns, values) {
    return new Promise(function (resolve, reject) {
      const connection = connect();

      const query = `
        INSERT INTO ${table}
        (${columns.join(',')})
        VALUES ("${Object.values(values).join('","')}")`;

      connection.query(query, function (error) {
        if (error) {
          connection.end();
          reject ({ 
            code: error.code,
            message: error.message
          });
        } 
        else {
          connection.end();
          resolve ({
            code: 200,
            message: 'Successfully Inserted data'
          });
        }
      });
    });
  },

  select (table, orderByProp, where = null, direction ='ASC' ) {
    return new Promise(function (resolve, reject) {
      const connection = connect();

      const query = `
        SELECT * 
        FROM ${table} 
        ${(where) ? `WHERE ${where}` : ''}
        ORDER BY ${orderByProp} ${direction}`; 

      connection.query(query, function (error, result) {
        if (error) {
          connection.end();
          reject ({ 
            code: 500,
            message: 'Error Selecting data'
          });
        } 
        else {
          connection.end();
          resolve (
            result.map(function(row) {
              let data = {};
              Object.keys(row).forEach(function (key){
                data[key] = row[key];    
              });
              return data; 
          }));  
        }
      });
    });
  } 
}
