// Write a program that copy file name source.txt to a new file named backup.txt using fs.copyFile().

const fs = require('fs');
const path = require('path');

// Define file paths
const sourcePath = path.join(__dirname, 'source.txt');
const backupPath = path.join(__dirname, 'backup.txt');
const fileContent = 'This is the original content of the source file.';

// 1. Create the source file first
fs.writeFile(sourcePath, fileContent, (err) => {
    if (err) {
        console.error('Error creating source file:', err);
        return;
    }
    console.log(`Successfully created source file: ${sourcePath}`);

    // 2. Now, copy the source file to the backup file using fs.copyFile()
    fs.copyFile(sourcePath, backupPath, (err) => {
        if (err) {
            console.error('Error copying file:', err);
            return;
        }
        console.log(`Successfully copied file from ${sourcePath} to ${backupPath}`);

        // Optional: Verify the contents of the new file
        fs.readFile(backupPath, 'utf8', (readErr, data) => {
            if (readErr) {
                console.error('Error reading backup file:', readErr);
                return;
            }
            console.log(`\nContents of backup.txt:`);
            console.log(data);
        });
    });
});
