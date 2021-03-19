const db = require("../models");
const path = require("path");
const router = require("express").Router();


/* --------------------- User Routes -------------------*/

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

// route to get one User and his entries
router.get("/api/User/One",(req, res) => {
    db.User.findOne({
  
           id: req.body.id,
     
        include: [db.JournalEntry]
    }).then((userDb) => {
        res.json(userDb);
    });
});


/* --------------------- Journal Entries Routes -------------------*/

// route to post journal entries
router.post("/api/Entry", (req, res) => {
  console.log(req.body);
    db.JournalEntry.create({
      title: req.body.title,
      text: req.body.text,
      UserId: req.body.id
    }).then((dbEntry) => {
        res.json(dbEntry)
        // console.log(dbEntry)
    })
})

// route to get journal entries
// router.get("/api/Entry", (req, res) => {
//   db.JournalEntry.findAll({
//     where: 
//   })
// })

// if no api routes are hit then we send the react app.
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
