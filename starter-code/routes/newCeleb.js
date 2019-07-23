const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Celebrity = require('../models/Celebrity')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/celebrities/new', (req, res, next) => {
    res.render('newCeleb');
})

router.post('/celebrities/new', (req, res, next) => {
    if (req.body.name &&
        req.body.occupation &&
        req.body.catchPhrase) {
        let newCeleb = new Celebrity({
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase
        })
        newCeleb.save()
            .then((celeb) => {
                console.log(celeb)
                res.render('celebProfile', { celeb });
            })
            .catch(() => {
                res.status(500).send("ERROR");
            })
    }
})

module.exports = router;