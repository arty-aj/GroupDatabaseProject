const mongoose = require("mongoose");
const router = require("../app");
//Organization
var nameOfOrg = new mongoose.Schema({
  org: {
    type: String,
  },
  OrganizationDescription: {
    type: String,
  },
  orgImage: {
    type: String,
  },
  userRole: {
    type: String,
  },
});

module.exports = mongoose.model("org", nameOfOrg);
