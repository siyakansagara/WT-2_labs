// Write a program to list all files in a folder called documents/using fs.reddir() and print the file name one by one.

const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'documents');

fs.readdir(folderPath, (err, items) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    items.forEach(item => {
        const itemPath = path.join(folderPath, item);

        fs.stat(itemPath, (err, stats) => {
            if (err) {
                console.error('Error getting stats for', item, err);
                return;
            }

            if (stats.isFile()) {
                console.log(item); // Print only files
            }
        });
    });
});
