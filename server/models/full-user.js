const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Users
let FullUser = new Schema({
  user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
  privileges: [
    {
      type: Schema.Types.Number,
      ref: "Privilege"
    }
  ],
});

module.exports = mongoose.model("FullUser", FullUser);
