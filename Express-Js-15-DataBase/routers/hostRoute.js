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

hostRouter.get("/host/home-edit/:homeId", hostController.getEditHome);

hostRouter.post("/host/edit-home", hostController.updateHome);
  
hostRouter.post("/host/delete-home", hostController.deleteHostHomeById);

exports.hostRouter = hostRouter;

