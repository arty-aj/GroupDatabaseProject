const mongoose = require("mongoose");
const router = require("../pages");

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
  club1: {
    type: String,
  },
  club2: {
    type: String,
  },
});

module.exports = mongoose.model("Register", contactSchema);
