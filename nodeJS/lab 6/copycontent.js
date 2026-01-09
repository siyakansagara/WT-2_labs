const fs = require('fs');
const data = fs.readFileSync('student.txt','utf8');
fs.writeFileSync('lab6 p2.txt',data);

console.log('File copy successfully');