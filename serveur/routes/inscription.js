const express = require('express');
const router = express.Router();
const connectDB = require("./../config/db");
;

router.get('/inscription', (req, res, next) => {
    res.render('inscription', { estInscrit: 1 });
});

// router.get("/connexion", (req, res, next) => {
//     res.render('inscription', {estInscrit : 2});
// });

// Inscription des nouveau utilisateurs
router.post("/inscription", (req, res) => {
    const { nom, prenom, mail } = req.body;
    
    connectDB.query('INSERT INTO identification(nom, prenom, email) VALUES (?, ?, ?);', [nom, prenom, mail], (err, resultat) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Insertion reussie");
            req.flash('success_msg', 'Inscription réussie!');
            res.status(300).redirect("/");
        }
    });
});


module.exports = router;