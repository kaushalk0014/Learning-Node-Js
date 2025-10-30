//core modules
const path = require("path");

//Externam modules
const express = require("express");
const hostRouter = express.Router();

//Local Modules
const pathUtils = require("../utils/pathUtils");


hostRouter.get("/host/add-home", (req, res, next) => {
  res.sendFile(path.join(pathUtils, "views", "registerHome.html"));
});

hostRouter.post("/host/home", (req, res, next) => {
  res.sendFile(path.join(pathUtils, "views", "homeAdd.html"));
});

module.exports = hostRouter;
