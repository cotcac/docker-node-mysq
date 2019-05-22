const express = require('express');
const mysql = require('mysql');
const app = express();
require('dotenv').config()
var con = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
app.get('/', (req, res) => {
  res.send("it works")
});



const port = 3000;

app.listen(port, () => console.log('Server running...'));
