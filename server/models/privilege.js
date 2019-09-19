const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Users
let Privilege = new Schema(
  {
    _id: Schema.Types.Number,
    value: Schema.Types.String
  },
  {
    collation: "priviliges"
  }
);

module.exports = mongoose.model("Privilege", Privilege);
