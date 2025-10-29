//External Modules
const express = require("express");

const app = express();

//Local Modules
const userRouter = require("./routers/userRoute");
const hostRouter = require("./routers/hostRoute");

app.use(express.urlencoded());

app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page 404 Not Found</h1>");
  //res.send();
  next();
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
