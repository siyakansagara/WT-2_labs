const fs = require('fs');

function countWords(countVowels) {
    fs.readFile(countVowels, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        let words = data.trim().split(/\s+/).length;
        console.log("Total Words:", words);
    });
}

countWords('data.txt');