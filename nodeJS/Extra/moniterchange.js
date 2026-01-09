//Write a program using fs.watch() to monitor changes in watching.txt. whenever file content changes, print :"File change".

const fs = require('fs');

// File to watch
const fileName = 'watching.txt';

// Watch the file
fs.watch("source.txt", (eventType,) => {
    if (eventType === 'change') {
        console.log('File change');
    }
});

console.log(`Watching for changes in ${fileName}...`);
