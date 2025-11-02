//core modules
const path = require("path");

//Externam modules
const express = require("express");
const hostRouter = express.Router();

//Local Modules
const pathUtils = require("../utils/pathUtils");

const homeController = require("../controller/homeController");


hostRouter.get("/host/add-home", homeController.getAddHome);

hostRouter.post("/host/add-home",homeController.saveHome);

exports.hostRouter = hostRouter;

