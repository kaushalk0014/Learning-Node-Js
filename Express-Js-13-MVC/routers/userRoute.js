
//Code Module
const path = require("path");

//External Modules
const express = require("express");

//Local Modules
const pathUtils = require("../utils/pathUtils");
const {registerHome} = require("./hostRoute");

const userRouter = express.Router();

const userController = require("../controller/UserController");

userRouter.get("/", userController.loadHomePage);

module.exports = userRouter;



