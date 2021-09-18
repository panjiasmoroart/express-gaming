const mongoose = require("mongoose");
const { urlDb } = require("../config/index");

mongoose.connect(urlDb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});

const db = mongoose.connection;

module.exports = db;
