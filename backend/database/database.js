var mysql = require('mysql');
var express    = require("express");
 
var connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "user",
  database: "bodima"
});

//today 
module.exports=connection;



connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  connection.query("CREATE DATABASE IF NOT EXISTS bodima", function (err, result) {
    if (err) throw err;
    console.log("Database created"); 
    // create database
  });


});

 
