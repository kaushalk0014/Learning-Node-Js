
//Core Modules
const path = require("path");


//External Modules
const express = require("express");

const app = express();

//Local Modules
const userRouter = require("./routers/userRoute");
const hostRouter = require("./routers/hostRoute");
const rootPath = require("./utils/pathUtils");

app.use(express.urlencoded());

app.use(userRouter);
app.use(hostRouter);

app.use(express.static(path.join(rootPath, "public")));

app.use((req, res, next) => {
  // res.status(404).send("<h1>Page 404 Not Found</h1>");
  // //res.send();

  res.sendFile(path.join(rootPath, "views", "404.html"));
  //next();
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
