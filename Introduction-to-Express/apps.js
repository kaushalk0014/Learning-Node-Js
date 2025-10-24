
//Core Module
const http = require("http");
 
//External Module
const express = require("express");

//Local Module
const userForm = require("./userForm");

const server = http.createServer((req, res) => {
  console.log("Request received");
  console.log(req.url, req.method);
 
  return userForm(req, res);
 
});

server.listen(3002, () => {
  console.log("Server is listening on port 3002");
});
