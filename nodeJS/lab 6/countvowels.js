const fs = require('fs');

const data1 = fs.writeFile('data.txt',`Hello world`, (err) => {
if (err)
    console.log(err)
else
  console.log('File written successfully');
});

function countVowels(countVowels) {
    fs.readFile(countVowels, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        let vowels = data.match(/[aeiouAEIOU]/g);
        console.log("Total Vowels:", vowels ? vowels.length : 0);
    });
}
countVowels('data.txt');