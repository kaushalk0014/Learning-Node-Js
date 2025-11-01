//core modules
const path = require("path");

//Externam modules
const express = require("express");
const hostRouter = express.Router();

//Local Modules
const pathUtils = require("../utils/pathUtils");


hostRouter.get("/host/add-home", (req, res, next) => {

  //here registerHome is view file name
  res.render("registerHome", {pageTitle:'Register Home', currentPage:'AddHome'});
  //res.sendFile(path.join(pathUtils, "views", "registerHome.html"));
});

const registerHome = [];

hostRouter.post("/host/add-home", (req, res, next) => {
  registerHome.push(req.body);

  //homeAdd is view file name
  res.render("homeAdd", {pageTitle:'Successfully Register Home',currentPage:'AddHome'});
  
  //res.sendFile(path.join(pathUtils, "views", "homeAdd.ejs"));
});

exports.hostRouter = hostRouter;
exports.registerHome = registerHome;
