
const http = require('http');


// function requestListener(req, res){
//   console.log('Request received');
//   console.log('Request URL:', req.url); 
// }

// using anonymous function example requestListener

//=========================Example 1 =========================

// const server = http.createServer(function (req, res){
//   console.log('Request received');
// });

// //listening server on port 4000 
// server.listen(4000, () => {
//   console.log('Server is listening on port 4000');
// });


//=========================Example 2 =========================

// using anonymous function example requestListener and listening server on same line
http.createServer((req, res) =>{
  console.log('Request received');
  console.log(req);
}).listen(4000, () => {
  console.log('Server is listening on port 4000');
});