const http = require('http');
const fs = require('fs');

http.createServer(async (req, res) => {

  console.log(`1. Start script`);

  console.log(`2. Reading file synchronously`);

   const fileData = fs.readFileSync('fileData.txt', 'utf8');


  console.log(`3. File read complete ${fileData}`);


  //Asynchronous operation
  console.log(`4. Starting async operation`);
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if(err) {
      console.log(`6. Async operation initiated`);
    }
  });

  console.log(`5. Task ended`);
  
}).listen(3000, () => {
  console.log('Server is listening on port 3000');
});