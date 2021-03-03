const express = require("express");
// const routes = require("./routes/index.js")

const app = express();
 
// listening on Port 3001 on server side.
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
})

