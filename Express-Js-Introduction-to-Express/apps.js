
//Core Module
//const http = require("http");
 
//External Module
const express = require("express");

//Local Module
const userForm = require("./userForm");

const app = express();

//adding middleware to handle form data
//Order will matter in middleware
//we can not call next() after sending response example res.send()
app.use((req, res, next)=>{
  console.log("Middleware 1: Logging request - ", req.method, req.url);
  next();
});

app.use((req, res, next)=>{
  console.log("Middleware 2: Adding timestamp to request - ", req.method, req.url);
  res.send("<h3>Welcome to Express Server middleware</h3>");
})

//const server = http.createServer(app);

app.listen(3002, () => {
  console.log("Server is listening on port 3002");
});
