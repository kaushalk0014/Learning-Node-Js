console.log(`1. Start of event loop sequence`);

Promoise.resolve().then(() =>{
  console.log(`2. First microtask executed`); 
});


//Timer callback

setTimeout(() =>{console.log(`3. Timer 1`)})

//I/O operation simulation

const fs = require('fs');
fs.readFile("eventLoop.txt", "utf-8", (err, data) =>{
  console.log(`4. I/O operation completed`);
})


//Check queue
setImmediate(() => {console.log(`5. Immediate callback executed`);});

//Close queue

process.on(`exit`, (code) =>{
  console.log(`6. Process exit event with code: ${code}`);
})

console.log(`7. End of script execution`);