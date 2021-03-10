const db = require("../models");
const path = require("path");
const router = require("express").Router();

// Route to Create a user
router.post("/api/User", (req, res) => {
  db.User.create({
    email: req.body.email,
  })
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => res.status(422).json(err));
});

// Route to get user
router.get("/api/User/all", (req, res) => {
  db.User.findAll({ include: [db.JournalEntry] }).then((userDb) => {
    res.json(userDb);
  });
});

// route to get one author and his entries
router.get("/api/authors/:id",(req, res) => {
    db.User.findOne({
        where: {
            id: req.params.id
        },
        include: [db.JournalEntry]
    }).then((userDb) => {
        res.json(userDb);
    });
});


// route to post journal entries


// if no api routes are hit then we send the react app.
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
