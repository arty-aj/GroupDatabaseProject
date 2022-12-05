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
  phoneNum: {
    type: String,
  },
  email: {
    type: String,
  },
  orgAPart: {
    type: String,
  },
});

module.exports = mongoose.model("Register", registerSchema);
