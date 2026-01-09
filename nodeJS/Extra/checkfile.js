//Write a program that check if the file config.json exists in the current directory using fs.existsSync() and print the resulr.

const fs = require('fs');
const fileName = 'config.json';

// Check if the file exists using fs.existsSync()
const fileExists = fs.existsSync(fileName);

// Print the result
if (fileExists) {
  console.log(`The file '${fileName}' exists in the current directory.`);
} else {
  console.log(`The file '${fileName}' does not exist in the current directory.`);
}