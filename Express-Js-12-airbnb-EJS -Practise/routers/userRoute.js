
//Code Module
const path = require("path");

//External Modules
const express = require("express");

//Local Modules
const pathUtils = require("../utils/pathUtils");
const {registerHome} = require("./hostRoute");

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  //res.sendFile(path.join(pathUtils, "views",  "home.ejs"));
  //Home here html file name
  res.render("home", {registeredHomes: registerHome, pageTitle:'Home airbnb'});
});

module.exports = userRouter;



