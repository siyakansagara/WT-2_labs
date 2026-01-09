// Write a programthat create a folder named my-data using fs.mkdir().if the folder already exists, show an appropriate message.

const fs = require('fs');
const path = require('path');

const folderName = 'my-data';
const folderPath = path.join(__dirname, folderName);

fs.mkdir(folderPath, (err) => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.log(`The folder '${folderName}' already exists.`);
    } else {
      console.error('An error occurred:', err);
    }
  } else {
    console.log(`Folder '${folderName}' created successfully at ${folderPath}`);
  }
});
