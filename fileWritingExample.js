
// - Loads the built-in fs module:
// - fs stands for File System.
// - It's a core Node.js module that provides functions to interact with the file system — like reading, writing, updating, deleting files and directories

console.log('This is an example of file system in node js');

const fileSystem = require('fs');

fileSystem.writeFile('outFile.txt', 'This is an example of file system in node js', (error) =>{
    if(error){
      console.log('Error occurred while writing the file:', error);
    }else{
      console.log('File written successfully!');
    }
})