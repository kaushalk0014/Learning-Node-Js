//Code Module
const path = require("path");

//External Modules
const express = require("express");
const contactUsSuccessRouter = express.Router();

//Local Modules
const pathUtils = require("../utils/pathUtils");

contactUsSuccessRouter.post("/host/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(pathUtils, "views",  "contactUsSuccess.html"));
});

module.exports = contactUsSuccessRouter;