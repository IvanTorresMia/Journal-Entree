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
    where: { email: email },
    include: [db.Profile, db.Catagory],
  }).then((res) => {
    console.log(res);
    return res;
  });
};

router.get("/api/User/:email", (req, res) => {
  getUser(req.params.email).then((foundUser) => {
    res.send(foundUser);
  });
});

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
    console.log(dbEntry);
  });
});

router.put("/api/updateEntry/:entry", (req, res) => {
  const arr = req.params.entry.split(",");
  const id = arr[0];
  const title = arr[1];
  const text = arr[2];

  console.log(text)

  updateEntries(id, title, text).then((response) => {
    res.json(response.dataValues);
  });
});

const updateEntries = (id, title, text) => {
  return db.JournalEntry.update(
    { title: title, text: text },
    { where: { id: id } }
  ).then((res) => {
    return res;
  });
};

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

const getCatagory = (name, id) => {
  return db.Catagory.findOne({
    where: { name: name, userId: id },
  }).then((res) => {
    // console.log(res);
    return res;
  });
};

router.get("/api/getCatagory/:name", (req, res) => {
  // console.log(req.params.name.split(","))
  const arr = req.params.name.split(",");
  const name = arr[0];
  const id = arr[1];

  console.log(name);
  console.log(id);

  getCatagory(name, id).then((foundUser) => {
    res.send(foundUser);
  });
});

const getAllEntries = (id) => {
  return db.JournalEntry.findAll({
    where: { CatagoryId: id },
  }).then((res) => {
    // console.log(res);
    return res;
  });
};

router.delete("/api/deleteCatagory/:id", (req, res) => {
  const id = JSON.parse(req.params.id);
  deleteCatagory(id).then((deletedUser) => {
    res.json(deletedUser);
  });
});

const deleteCatagory = (id) => {
  return db.Catagory.destroy({
    where: { id: id },
  }).then((res) => {
    return res;
  });
};

// router.delete("/api/todos/:id")

router.get("/api/getAllEntries/:id", (req, res) => {
  getAllEntries(req.params.id).then((foundUser) => {
    res.send(foundUser);
  });
});

/* --------------------- Route to create Profile -------------------*/

// Route to Create a user
router.post("/api/Profile", (req, res) => {
  db.Profile.create({
    UserName: req.body.userName,
    UserId: req.body.id,
    tagline: req.body.tagLine,
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
