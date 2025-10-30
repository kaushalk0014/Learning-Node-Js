//core modules
const path = require("path");

//Externam modules
const express = require("express");
const hostRouter = express.Router();

//Local Modules
const pathUtils = require("../utils/pathUtils");


hostRouter.get("/host/add-home", (req, res, next) => {
  // res.send(`<h1>Register home</h1>
  //     <div style="border:1px solid black; padding:10px; width:300px; margin:200px;">
  //       <form action="/host/home" method="POST"><br>
  //         <label>House Name:</label><br>
  //         <input type="text" name="homeName" placeholder="Enter house name"/><br></br>
  //         <button type="submit">Submit</button>
  //     </div>
  //   `);

  //res.sendFile(path.join(__dirname, "../", "views", "registerHome.html"));
  res.sendFile(path.join(pathUtils, "views", "registerHome.html"));
});

hostRouter.post("/host/home", (req, res, next) => {
  // console.log("Form Data Received:", req.body);
  // res.send(`<h1>Home Registered Successfully</h1>
  //     <p>House Name: ${req.body.homeName}</p>
  //     <a href="/">Go to Home</a>
  //   `);

  //  res.sendFile(path.join(__dirname, "../", "views", "homeAdd.html"));
  res.sendFile(path.join(pathUtils, "views", "homeAdd.html"));
});

module.exports = hostRouter;
