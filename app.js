const express = require("express");
const app = express();
const port = 3000;
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

router.post("/submitInformation", (req, res) => {
  const contact = new contacts({
    fname: req.body.fname,
    lname: req.body.lname,
    phoneNum: req.body.phoneNum,
    email: req.body.email,
    commentSection: req.body.commentSection,
  });
  contact.collection
    .insertOne(contact)
    .then((result) => {
      res.render("contact");
    })
    .catch((err) => console.log(err));
});

module.exports = router;
