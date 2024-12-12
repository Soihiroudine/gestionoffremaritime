const express = require('express');
const router = express.Router();
const connectDB = require("./../config/db");

router.get('/inscription', (req, res, next) => {
    res.render('inscription', { estInscrit: 1 });
});

// router.get("/connexion", (req, res, next) => {
//     res.render('inscription', {estInscrit : 2});
// });

// Inscription des nouveau utilisateurs
router.post("/inscription", (req, res) => {
    const { nom, prenom, mail, password } = req.body;
    
    connectDB.query('INSERT INTO identification(nom, prenom, email, motDePasse) VALUES (?, ?, ?, ?);', [nom, prenom, mail, password], (err, resultat) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Insertion reussie");
            res.status(300).redirect("/");
        }
    });
});


module.exports = router;