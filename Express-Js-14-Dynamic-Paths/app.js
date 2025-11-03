
//Core Modules
const path = require("path");


//External Modules
const express = require("express");

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Local Modules
const storeRouter = require("./routers/storeRoute");
const {hostRouter} = require("./routers/hostRoute");
const rootPath = require("./utils/pathUtils");

app.use(express.urlencoded());

app.use(storeRouter);
app.use(hostRouter);

app.use(express.static(path.join(rootPath, "public")));

const errorController = require("./controller/errorController");

app.use(errorController.getPageNotFount);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
