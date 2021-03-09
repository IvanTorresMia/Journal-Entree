const db = require("../models");
const path = require("path");
const router = require("express").Router();


router.post("/api/User", (req, res) => {
    db.User.create({ 
        email: req.body.email
    }).then((dbUser) => {
        res.json(dbUser);
    }).catch(err => res.status(422).json(err))
})


// if no api routes are hit then we send the react app.
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });


module.exports = router;