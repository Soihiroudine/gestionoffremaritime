require('dotenv').config();

// On import le framework express
const express = require("express");
const layouts = require("express-ejs-layouts"); 
const session = require("express-session");
// const connectDB = require("./serveur/config/db.js");

// Connection à la base de donné

// On créer l'application expressJs avec : app
const app = express();
const sessionCle = process.env.SESSION_SECRET;

app.use(layouts);
app.set("layout", "./layouts/main");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// fichier static
app.use(express.static("public"));

// Express session
app.use(
    session({
        secret: sessionCle,
        resave: false,
        saveUninitialized: true,
        cookie: { 
          secure: true, 
          httpOnly: true
         }
    })
);

// Engine
app.set("views", "./views");
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    if (req.session.views) {
      req.session.views++; // Incrémenter la vue à chaque visite
      // res.send(`<h1>Vous avez visité cette page ${req.session.views} fois.</h1>`);
    } else {
      req.session.views = 1; // Initialiser si c'est la première visite
      // res.send('<h1>Bienvenue ! C\'est votre première visite.</h1>');
    }
    res.redirect("/index");
  });

// Appel des routes
app.use('/', require("./serveur/routes/index"));
app.use("/", require("./serveur/routes/contact"));
app.use("/", require("./serveur/routes/profil"));
app.use("/", require("./serveur/routes/inscription"));
app.use("/", require("./serveur/routes/afficheEleves"));

// Toutes les routes qui n'existe pas on la page d'erreur
app.get("*", (req, res) => {
    res.status(404).render("404");
});

// On export l'application
module.exports = app;