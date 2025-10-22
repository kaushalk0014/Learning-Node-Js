const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from my Node.js Server!</h1>");
    res.write("<p>Welcome to the Home Page</p>");
    res.write("<form action='/customers' method='POST'>");
    res.write("<label>User Name:</label><br>");
    res.write("<input type='text' name='username' placeholder='Please enter user name'/><br>");
    res.write("<label>Gender:</label><br>");
    res.write("<input type='radio' name='gender' value='Male'/> Male ");
    res.write("<input type='radio' name='gender' value='Female'/> Female<br>");
    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");
    res.write("</body></html>");
    res.end();
  } else if (req.method === 'POST' && req.url.toLowerCase() === "/customers") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString(); // convert Buffer to string
    });

 //   console.log("Body data received:", JSON.parse(body));

    req.on("end", () => {

      const parsedData = querystring.parse(body);

      console.log("parsedData data received:", parsedData);
      res.write("<html><body>");
      res.write("<h1>Customer Data Submitted</h1>");
      res.write(`<p>User Name: ${parsedData.username}</p>`);
      res.write(`<p>Gender: ${parsedData.gender}</p>`);
      res.write("</body></html>");
      res.end();
    });
  } else {
    res.write("<html><body><h1>404 Not Found</h1></body></html>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});