
//External module
const express = require("express");
const app = express();

//Core Module
const path = require("path");

const rootPath = require("./utils/pathUtils");

//Local Modules
const userRouter = require("./routers/userRouter"); 
const contactUSFormRouter = require("./routers/contactUSFormRouter");
const contactUsSuccessRouter = require("./routers/contactUsSuccess");

app.use(express.urlencoded());

app.use(userRouter);
app.use(contactUSFormRouter);
app.use(contactUsSuccessRouter);


app.use((req, res, next) =>{
  res.sendFile(path.join(rootPath, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
