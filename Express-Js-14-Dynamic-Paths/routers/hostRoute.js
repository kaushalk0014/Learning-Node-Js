//core modules
const path = require("path");

//Externam modules
const express = require("express");
const hostRouter = express.Router();

//Local Modules
const pathUtils = require("../utils/pathUtils");

const hostController = require("../controller/hostController");


hostRouter.get("/host/add-home", hostController.getAddHome);

hostRouter.post("/host/add-home",hostController.saveHome);

hostRouter.get("/host/home-list",hostController.getHostHomeList);

exports.hostRouter = hostRouter;

