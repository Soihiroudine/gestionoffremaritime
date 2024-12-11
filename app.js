require('dotenv').config();

// On import le framework express
const express = require("express");
const layouts = require("express-ejs-layouts"); 
// const bodyParser = require('body-parser');
const connectDB = require("./serveur/config/db.js");

// Connection à la base de donné
connectDB();

// On créer l'application expressJs avec : app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// fichier static
app.use(express.static("public"));

// Engine
app.set("views", "./views");
app.set("view engine", "ejs");

// Appel des routes
app.use('/', require("./serveur/routes/index"));
app.use("/", require("./serveur/routes/contact"));
app.use("/", require("./serveur/routes/formation"));
app.use("/", require("./serveur/routes/inscription"));

app.get("*", (req, res) => {
    res.status(404).render("404");
});

// On export l'application
module.exports = app;