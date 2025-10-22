
const http = require('http');

const server = http.createServer((req, res)=>{

  console.log('Request received');
  process.exit();

})

const PORT = 5000;
server.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT);
});