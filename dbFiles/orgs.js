const { response } = require("express");
const mongoose = require("mongoose");

mongoose.connect(process.env.IMONG);

const dbToWS = mongoose.connection;

dbToWS.on("error", console.error.bind(console, "MongoDB had an error."));

const org = require("./"); // Need to figure out how to search the data base for commonalities

const getAllorgs = (response) =>{
    org.getAllorgs(response);
};

//const indivOrgs = 