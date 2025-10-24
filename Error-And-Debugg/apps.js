
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Request received');
 console.log(req);

  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Welcome to home page : Learning Error and debugg</h1>');
})


server.listen(3000, () => {
  console.log('Server is listening on port 3000');
})