const mongoose = require("mongoose");
const router = require("../app");

var contactSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Register", contactSchema);
