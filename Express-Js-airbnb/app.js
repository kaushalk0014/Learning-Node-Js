//External Modules
const express = require("express");

const app = express();

const userRouter = require("./routers/userRoute");
const hostRouter = require("./routers/hostRoute");

app.use((req, res, next) => {
  console.log(`Request URL: ${req.url} - Request Method: ${req.method}`);
  next();
});

app.use(express.urlencoded());

app.use(userRouter);
app.use(hostRouter);

// app.get("/", (req, res, next) => {
//   res.send(`<h1>Welcome airbnb</h1>
//       <a href="/add-home">Add Home</a>
//     `);
// });

// app.get("/host/add-home", (req, res, next) => {
//   res.send(`<h1>Register home</h1>
//       <div style="border:1px solid black; padding:10px; width:300px; margin:200px;">
//         <form action="/host/home" method="POST"><br>
//           <label>House Name:</label><br>
//           <input type="text" name="homeName" placeholder="Enter house name"/><br></br>
//           <button type="submit">Submit</button>
//       </div>
//     `);
// });

// app.post("/host/home", (req, res, next) => {
//   console.log("Form Data Received:", req.body);
//   res.send(`<h1>Home Registered Successfully</h1>
//       <p>House Name: ${req.body.homeName}</p>
//       <a href="/">Go to Home</a>
//     `);
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
