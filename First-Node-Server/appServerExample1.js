const http = require('http');

function requestListener(req, res){
  console.log('Request received');
  console.log('Request URL:', req.url);
}

const server = http.createServer(requestListener);

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

server.on('listening', () => {
  console.log('Server is listening on port 3000');
});



