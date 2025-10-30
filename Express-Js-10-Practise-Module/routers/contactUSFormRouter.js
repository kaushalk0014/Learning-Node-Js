//Local Modules
const path =   require("path");

//External Modules
const express = require("express");
const contactUsFormRouter = express.Router();

//Local Modules
const pathUtils = require("../utils/pathUtils");

contactUsFormRouter.get("/host/contact-us", (req, res, next) => {
  res.sendFile(path.join(pathUtils, "views",  "contactUsForm.html"));
});

module.exports = contactUsFormRouter;

