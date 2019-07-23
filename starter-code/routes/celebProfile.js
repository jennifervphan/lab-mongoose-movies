const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')

router.get('/celebrity', (req, res, next) => {
    Celebrity.findOne({ _id: req.query.celeb_id })
        .then((celeb) => {
            console.log(celeb)
            res.render('celebProfile', { celeb });
        })
        .catch(() => {
            res.status(500).send("ERROR");
        })
})

module.exports = router;