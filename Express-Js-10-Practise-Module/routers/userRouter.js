//Code Module
const path = require("path");

//External Modules
const express = require("express");
const userRouter = express.Router();

//Local Modules
const pathUtils = require("../utils/pathUtils");


userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(pathUtils, "views",  "home.html"));
})

module.exports = userRouter;
