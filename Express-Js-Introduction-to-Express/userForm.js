const querystring = require("querystring");

const fs = require("fs");


const requestHandler = (req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from my Node.js Server!</h1>");
    res.write("<p>Welcome to the Home Page</p>");
    res.write("<form action='/customers' method='POST'>");
    res.write("<label>User Name:</label><br>");
    res.write(
      "<input type='text' name='username' placeholder='Please enter user name'/><br>"
    );
    res.write("<label>Gender:</label><br>");
    res.write("<input type='radio' name='gender' value='Male'/> Male ");
    res.write("<input type='radio' name='gender' value='Female'/> Female<br>");
    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");
    res.write("</body></html>");
    res.end();
  } else if (req.method === "POST" && req.url.toLowerCase() === "/customers") {
    let body = [];

    req.on("data", (chunk) => {
      body.push(chunk); //.toString(); // convert Buffer to string
    });

    //   console.log("Body data received:", JSON.parse(body));

    req.on("end", () => {
     const parsedData = Buffer.concat(body).toString();

      const params = new URLSearchParams(parsedData);

      const bodyObject = Object.fromEntries(params.entries());
      console.log("Body Object:", bodyObject);

      fs.writeFileSync("customerData.json", JSON.stringify(bodyObject));

      console.log("parsedData data received:", parsedData);
      res.write("<html><body>");
      res.write("<h1>Customer Data Submitted</h1>");
      res.write(`<p>User Name: ${bodyObject.username}</p>`);
      res.write(`<p>Gender: ${bodyObject.gender}</p>`);
      res.write("</body></html>");
      res.end();
    });
  } else {
    res.write("<html><body><h1>404 Not Found</h1></body></html>");
    res.end();
  }
};

module.exports = requestHandler;
