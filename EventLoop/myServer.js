

const http = require('http');

const requestHandler = require('./homePage');

const server =  http.createServer(requestHandler);


server.listen(3000, () =>{
  console.log('Server is listening on port 3000');
});