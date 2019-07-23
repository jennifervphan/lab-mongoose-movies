const express = require('express');
const router = express.Router();
const Celebrity = require("../models/Celebrity")

router.get('/celebrities', (req, res, next) => {
    Celebrity.find({})
        .then((celebs) => {
            res.render('celebrities', { celebs });

        })
        .catch(() => {
            res.status(500).send("ERROR");
        })
})

module.exports = router;