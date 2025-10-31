
//Core Modules
const path = require("path");


//External Modules
const express = require("express");

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Local Modules
const userRouter = require("./routers/userRoute");
const {hostRouter} = require("./routers/hostRoute");
const rootPath = require("./utils/pathUtils");

app.use(express.urlencoded());

app.use(userRouter);
app.use(hostRouter);

app.use(express.static(path.join(rootPath, "public")));

app.use((req, res, next) => {
  // res.status(404).send("<h1>Page 404 Not Found</h1>");
  // //res.send();

  //404 is a view file name
  res.render("404", {pageTitle:'404 Page'});
  //res.sendFile(path.join(rootPath, "views", "404.ejs"));
  //next();
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
