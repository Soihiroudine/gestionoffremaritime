const express = require('express');
const router = express.Router();

router.get('/index', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

module.exports = router;