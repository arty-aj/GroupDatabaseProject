const mongoose = require("mongoose");
const router = require("../app");

var nameOfClub = new mongoose.Schema({
  club: {
    type: String,
  },
  clubDescript: {
    type: String,
  },
  orgImg: {
    type: binData,
  },
  role: {
    type: String,
  },
});
