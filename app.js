const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();
const newInfo = require("./dbFiles/register");
const reg = require("./dbFiles/orgs");
const mongoose = require("mongoose");

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/img", express.static(__dirname + "/public/img"));
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/explorePage", (req, res) => {
  res.render("explorePage");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/registerClub", (req, res) => {
  res.render("registerClub");
});

app.get("/orgPage", (req, res) => {
  res.render("orgPage");
});

app.listen(port, () => console.info("Listening on port", { port }));
//localhost:3000

app.post("/submitInformation", (req, res) => {
  newInfo = new newInfo({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    uName: req.body.uName,
    pWord: req.body.pWord,
    orgAPart: req.body.orgAPart,
  });

  newInfo.collection
    .insertOne(newInfo)
    .then((result) => {
      res.render("newInfo");
    })
    .catch((err) => console.log(err));
});

app.post("/registerAttendee", (req, res) => {
  reg = new reg({
    org: req.body.org,
    OrganizationDescription: req.body.OrganizationDescription,
    orgImage: req.body.orgImage,
    userRole: req.body.userRole,
  });

  reg.collection
    .insertOne(reg)
    .then((result) => {
      res.render("newInfo");
    })
    .catch((err) => console.log(err));
});
module.exports = router;
