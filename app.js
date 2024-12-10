// On import le framework express
const express = require("express");

const path = require("path");

// On créer l'application expressJs avec : app
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

const mysql = require('mysql2');

const myConnection = require('express-myconnection');

app.use(express.static("public"));

// Importer les routes
const indexRoute = require("./routes/index");
const contactRoute = require("./routes/contact");
const formationRoute = require("./routes/formation");
const inscriptionRoute = require("./routes/inscription");

// Appele des middleware des routes
app.use('/', indexRoute);
app.use("/", contactRoute);
app.use("/", formationRoute);
app.use("/", inscriptionRoute);

// On export l'application
module.exports = app;