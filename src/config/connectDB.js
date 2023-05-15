// get the client
// const mysql = require('mysql2');

import mysql from "mysql2/promise"

// create the connection to database

const pool = mysql.createPool(
    {
        host: "localhost",
        user: "root",
        database: "nodejsbasic"
    }
)

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'nodejsbasic'
// });

// simple query
// connection.query(
//   'SELECT * FROM `users`',
//   function(err, results, fields) {
//     console.log("check >> mysql: ")
//     console.log(results); // results contains rows returned by server
//     let rows  = results.map(result => result)
//     console.log(rows); // fields contains extra meta data about results, if available
//   }
// );


export default pool