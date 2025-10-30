const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  //res.send("<h1>Welcome to Express JS Practise First middleware</h1>");
  console.log("First middleware executed");
  next();
});

app.use("/", (req, res, next) => {
  //res.send("<h2>Welcome to Express JS Practise Second middleware</h2>");
  console.log("Second middleware executed");
  next();
});

// app.use("/", (req, res, next)=>{
//   console.log("Third middleware executed");
//   res.send("<h3>Welcome to Express JS Practise Third middleware</h3>");
//   //next();
// });

app.get("/", (req, res, next) => {
  console.log("Handling GET request for /");
  res.send("<h1>Welcome to Express JS Practise Home Page</h1>");
  console.log("Home Page middleware executed");
  next();
});

app.get("/contact-us", (req, res, next) => {
  res.send(`<h1>Please give your details</h1>
    <div style="margin:50px;">
      <form action="/contact-us" method="POST">
        <label>Name:</label><br>
        <input type="text" name="name" placeholder="Enter your name"/><br>
        <label>Email:</label><br> 
        <input type="email" name="email" placeholder="Enter your email"/><br><br>
        <button type="submit">Submit</button>
      </form>
      </div>
    `);
  console.log("Contact Us Page middleware executed");
  next();
});

app.post("/contact-us", (req, res, next) => {
  console.log("Handling POST request for /contact-us");
  res.send("<h2>Thank you for submitting your details. We will get back to you soon!</h2>");
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
