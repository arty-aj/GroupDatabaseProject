const mongoose = require("mongoose");
const router = require("../app");
//Attendee
var registerSchema = new mongoose.Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  email: {
    type: String,
  },
  uName: {
    type: String,
  },
  pWord: {
    type: String,
  },
  orgAPart: {
    type: String,
  },
});

module.exports = mongoose.model("Register", registerSchema);
