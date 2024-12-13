const express = require('express');
const router = express.Router();
const connectDB = require("./../config/db");


router.get("/listeEleve", (req, res) => {
    if(req.session.user) {
        connectDB.query('SELECT * FROM identification', (err, resulthat) => {
            if (err) {
                console.log(err);
            } else {
                res.render("afficheEleve", { resulthat });
            }
        });
    }else {
        res.redirect("/connexion");
    }
});

// Suppression d'un element a partir de son id
router.post("/delete", (req, res) => {
    const id = req.body.id;  // Récupérer l'ID depuis l'URL

    connectDB.execute('DELETE FROM identification WHERE id = ?', [id], (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send('Erreur lors de la suppression');
        } else {
          res.redirect('/listeEleve');
        }
      });
});

module.exports = router;