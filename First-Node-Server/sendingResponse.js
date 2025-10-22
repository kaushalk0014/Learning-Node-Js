const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request received");

  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
 