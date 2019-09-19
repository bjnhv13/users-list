const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Users
let User = new Schema({
  username: String,
  description: String
});

module.exports = mongoose.model("User", User);
