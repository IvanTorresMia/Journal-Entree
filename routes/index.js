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
  db.User.findAll({}).then((userDb) => {
    res.json(userDb);
  });
});

const getUser = (email) => {
  return db.User.findOne({
    where: {email: email},
    include: [db.Profile, db.Catagory]
  }).then(res => {
    console.log(res);
    return res;
  })
}

router.get("/api/User/:email", (req, res) => {
  getUser(req.params.email).then(foundUser => {
    res.send(foundUser);
  })
})


/* --------------------- Journal Entries Routes -------------------*/

// route to post journal entries
router.post("/api/Entry", (req, res) => {
  console.log(req.body);
  db.JournalEntry.create({
    title: req.body.title,
    text: req.body.text,
    CatagoryId: req.body.id,
  }).then((dbEntry) => {
    res.json(dbEntry);
    console.log(dbEntry)
  });
});

// route to get journal entries
// router.get("/api/Entry", (req, res) => {
//   db.JournalEntry.findAll({
//     where:
//   })
// })

/* --------------------- Route to create catagory -------------------*/
router.post("/api/Catagory", (req, res) => {
  db.Catagory.create({
    name: req.body.name,
    description: req.body.description,
    UserId: req.body.id,
  })
    .then((dbCatagory) => {
      res.json(dbCatagory);
    })
    .catch((err) => res.status(422).json(err));
});

/* --------------------- Route to create Profile -------------------*/

// Route to Create a user
router.post("/api/Profile", (req, res) => {
  db.Profile.create({
    UserName: req.body.userName,
    UserId: req.body.id,
  })
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => res.status(422).json(err));
});

// if no api routes are hit then we send the react app.
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
