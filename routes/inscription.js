const express = require('express');
const router = express.Router();

// let estInscrit = true;

router.get('/inscription', (req, res, next) => {
    res.render('inscription', {estInscrit : false});
});

router.get("/connexion", (req, res, next) => {
    res.render('inscription', {estInscrit : true});
});

module.exports = router;