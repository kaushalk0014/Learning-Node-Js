
//Code Module
const path = require("path");

//External Modules
const express = require("express");

//Local Modules
const pathUtils = require("../utils/pathUtils");
const {registerHome} = require("./hostRoute");

const storeRouter = express.Router();

const storeController = require("../controller/storeController");

storeRouter.get("/store/booking", storeController.getBooking)

storeRouter.get("/", storeController.loadHomePage);

module.exports = storeRouter;



