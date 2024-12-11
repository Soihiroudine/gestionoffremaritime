const express = require('express');
const router = express.Router();

router.get('/formation', (req, res, next) => {
    res.render('formation');
});

module.exports = router;