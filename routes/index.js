const db = require("../models");
const router = require("express").Router();

router.post("/api/User", (req, res) => {
    db.User.create({ 
        email: req.body.email
    }).then((dbUser) => {
        res.json(dbUser);
    }).catch(err => res.status(422).json(err))
})

module.exports = router;