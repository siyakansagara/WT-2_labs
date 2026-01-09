//write a program to delete a file named temp.txt using fs.unlike()and display success or error.

const fs = require('fs');
const fileName = 'temp.txt';
fs.unlink(fileName, (err) => {
  if (err) {
    console.error(`Error deleting the file ${fileName}:`, err);
  } 
  else {
    console.log(`Successfully deleted the file: ${fileName}`);
  }
});