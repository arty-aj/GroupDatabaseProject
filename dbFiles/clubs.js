const mongoose = require("mongoose");

mongoose.connect(process.env.IMONG);

const dbToWS = mongoose.connection;

dbToWS.on("error", console.error.bind(console, "MongoDB had an error."));

const club1 = require("./club1"); // Need to figure out how to search the data base for commonalities
const club2 = require("./club2");
