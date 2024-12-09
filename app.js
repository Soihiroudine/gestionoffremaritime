// On import le framework express
const express = require("express");

// On va pouvoir travailler avec les fichiers et dossier
// const path = require("path");

// le module permet de manipuler des fichier
// const fs = require("fs");

// On créer l'application expressJs avec : app
const app = express();

// app.set("views", "./views"); //L'endroit ou se situe la vue
// app.set("view engine", "ejs"); //Precise le moteur de lecture : ejs

// BAse de donner
// const mysql = require('mysql2');

// const myConnection = require('express-myconnection');

// const bodyParser = require('body-parser');

// Connection 
const connection = {
    host: 'localhost',
    user: 'cazer',
    password: '5*8E7t%Xm#RzNL',
    port: 3306,
    database: 'restaurant'
};

// Middleware pour analyser les données du formulaire
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(myConnection(mysql, connection, "pool"));

// On va faire en sorte que le serveur puisse avoir accés aux elementx du dossier public
// app.use(express.static(path.join(__dirname, "views")));
// app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Creation de serveur !");
});
// On export l'application
module.exports = app;