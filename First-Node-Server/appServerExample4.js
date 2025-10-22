const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request received");
  console.log("Request URL:", req.url);
  console.log("Request Method: ", req.method);
  console.log("Request Headers: ", req.headers);
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
