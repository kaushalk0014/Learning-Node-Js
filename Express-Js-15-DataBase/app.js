
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
const errorController = require("./controller/errorController");

// const db = require("./utils/databaseUtils");

// // db.execute("select * from airbnb.home_details").then(([rows, fields])=>{
// //   console.log("-----------------------------")
// //   console.log(rows);
 
// // }).catch(err=>{
// //   console.error("DB Error:", err);
// // });
 

// async function getListings() {
//   try {
//     const [rows] = await db.query("SELECT * FROM airbnb.home_details");
//     console.log(rows);
//   } catch (err) {
//     console.error("DB Error:", err);
//   }
// }

 

app.use(express.urlencoded());

app.use(storeRouter);
app.use(hostRouter);

app.use(express.static(path.join(rootPath, "public")));



app.use(errorController.getPageNotFount);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
