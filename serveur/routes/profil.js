const express = require('express');
const router = express.Router();

router.get('/profil', (req, res, next) => {
    res.render('profil');
});

module.exports = router;