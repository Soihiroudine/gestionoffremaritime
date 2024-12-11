// On import le framework express
const express = require("express");

// const path = require("path");

const mysql = require('mysql2');

const myConnection = require('express-myconnection');

const bodyParser = require('body-parser');


// On créer l'application expressJs avec : app
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
// Connection 
const connection = {
    host: 'localhost',
    user: 'cazer',
    password: '5*8E7t%Xm#RzNL',
    port: 3306,
    database: 'offre_formation_maritime'
};

// Middleware pour analyser les données du formulaire

app.use(myConnection(mysql, connection, "pool"));

// Importer les routes
const indexRoute = require("./routes/index");
const contactRoute = require("./routes/contact");
const formationRoute = require("./routes/formation");
const inscriptionRoute = require("./routes/inscription");

// Appel des routes
app.use('/', indexRoute);
app.use("/", contactRoute);
app.use("/", formationRoute);
app.use("/", inscriptionRoute);

// On export l'application
module.exports = app;