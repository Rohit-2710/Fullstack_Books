const dbConfig = require("../config/databaseConfig");
const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.Books = require("./structure.js")(mongoose);
module.exports = db;
