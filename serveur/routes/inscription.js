const express = require('express');
const router = express.Router();
const connectDB = require("./../config/db");

router.use(express.urlencoded({ extended: true }));

router.get('/inscription', (req, res, next) => {
    res.render('inscription', { estAdmin: false });
});

// Inscription des nouveau eleves
router.post("/inscription", (req, res) => {
    const { nom, prenom, mail } = req.body;
    
    connectDB.query('INSERT INTO identification(nom, prenom, email) VALUES (?, ?, ?);', [nom, prenom, mail], (err, resultat) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Insertion reussie");
            return res.status(300).redirect("/");
        }
        return res.status(404).redirect("/inscription");
    });
});


// Connexion des administrateur
router.get("/connexion", (req, res, next) => {
    res.render('inscription', {estAdmin: true});
});

// Route de connexion
router.post("/connexion", (req, res) => {
    const { nomAdmin, passwordConnexion } = req.body;

    // Requête SQL pour récupérer l'utilisateur correspondant
    const sql = 'SELECT nomIdentifiant, password FROM admin WHERE nomIdentifiant = ?';

    connectDB.query(sql, [nomAdmin], (err, results) => {
        if (err) {
            console.error('Erreur SQL :', err);
            return res.status(500).send('Erreur interne du serveur');
        }

        if (results.length === 0) {
            // Aucun utilisateur trouvé
            console.log("Utilisateur non trouvé");
            return res.redirect("/connexion?error=Utilisateur%20non%20trouvé");
        }

        const user = results[0];

        // Comparaison des mots de passe 
        if(user.password === passwordConnexion) {
            // Connexion réussie, créer la session utilisateur
            req.session.user = nomAdmin;
            console.log("Utilisateur connecté :", nomAdmin);
            return res.redirect("/profile");
        } else {
            // Mot de passe incorrect
            console.log("Mot de passe incorrect");
            return res.redirect("/connexion?error=Mot%20de%20passe%20incorrect");
        }
    });
});


module.exports = router;