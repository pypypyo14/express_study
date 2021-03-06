'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Some photos');
});

router.get('/:title', (req, res, next) => {
    const title = req.params.title;
    res.send(title); // XSS未対応
});

module.exports = router;