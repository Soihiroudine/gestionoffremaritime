const mysql = require("mysql2");
require("dotenv").config();

// const myConnection = require('express-myconnection');
const connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    port: process.env.port,
    database: process.env.database
});

// Vérifier si la connexion est réussie
connection.connect((err) => {
    if (err) {
      console.error('Erreur de connexion à la base de données : ' + err.stack);
      return;
    } console.log('Connecté à la base de données');
  });

module.exports = connection;