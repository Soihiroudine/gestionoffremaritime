const express = require('express');
const router = express.Router();

router.get('/formation', (req, res, next) => {
    if(req.session.user) {
        res.render('formation');
    }else {
        res.redirect("/connexion");
    }
});

router.post("/ajoutFormation", (req, res) => {
    const {titreFormation, detailFormation, lieuFormation } = req.body;
});

module.exports = router;