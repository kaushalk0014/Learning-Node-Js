
//Code Module
const path = require("path");

//External Modules
const express = require("express");

//Local Modules
const pathUtils = require("../utils/pathUtils");
const {registerHome} = require("./hostRoute");

const storeRouter = express.Router();

const storeController = require("../controller/storeController");

storeRouter.get("/", storeController.indexPage);

storeRouter.get("/store/booking", storeController.getBooking);

storeRouter.get("/store/getfavourity", storeController.getFavourityList);

storeRouter.get("/store/home-list", storeController.getHomeList);

storeRouter.get("/homes/:homeId", storeController.getHomeDetails);
storeRouter.post("/favourites", storeController.saveToFavouritys);

module.exports = storeRouter;



