const mysql = require("mysql2");
const myConnection = require('express-myconnection');

async function connectToDatabase() {
    try {
        const connection = {
            host: process.env.host,
            user: process.env.user,
            password: process.env.password,
            port: process.env.port,
            database: process.env.database
        }
        const db = await myConnection(mysql, connection, "pool");
        console.log('Connecté à la base de données');
        return db;
    } catch (error) {
        console.error('Erreur de connexion à la base de données', error);
  }
}

module.exports = connectToDatabase;