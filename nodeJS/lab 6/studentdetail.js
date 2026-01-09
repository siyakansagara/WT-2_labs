const fs = require('fs');

const data1 = fs.writeFile('student.txt',`name:riddhi , roll no:102 , contact:876543217
name:mudra , roll no:105 , contact:876543217
name:hetvi , roll no:103 , contact:87654321
name:riya , roll no:104 , contact:876543217`, (err) => {
if (err)
    console.log(err)
else
  console.log('File written successfully');
});

console.log("Student details stored successfully.");