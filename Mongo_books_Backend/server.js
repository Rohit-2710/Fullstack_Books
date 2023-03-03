const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// const dbconfig = require("./config/databaseConfig");
// const mongoose = require("mongoose");
const db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var corOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corOptions));

// mongoose.Promise = global.Promise;
db.mongoose
  .connect(db.url, { useNewUrlParser: true })
  .then(() => {
    console.log("Connection with MongoDB established Successfully");
    require("./app/routing")(app);
    app.listen(3000, () => {
      console.log("Server Listening at http://localhost:3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to CRUD application for book database using MongoDB",
  });
});
