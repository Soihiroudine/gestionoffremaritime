const express = require('express');
const router = express.Router();
// const connectDB = require("./../config/db");

router.get('/profile', (req, res) => {
    console.log("Ariver dans profil !");
    if (req.session.user) {
        res.render("profil", { utilisateur : req.session.user });
    } else {
        res.redirect("/connexion");
    }
});

// Route pour détruire la session
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.send('Erreur lors de la déconnexion.');
      }
      res.redirect("/connexion");
    });
});

module.exports = router;