// const path=require('path');
// console.log("normalize:",path.normalize('/WT LAB/map of count/..'))
// console.log("join:",path.join('/Node','ABC','/Program'))
// console.log("resolve:",path.resolve('index.js'))
// console.log("relative",path.relative('/node/index.js','/sem4'))
// console.log("dirname",path.dirname('/B-TECH/MoMSystem.txt'))
// console.log("basename",path.basename('/B-TECH/MoMSystem.txt'))
// console.log("extname",path.extname('/B-TECH/MoMSystem.txt'))

// -----------------------------

//fs module

const fs = require('fs');
const fs1 = require('fs/promises');
const data = fs.readFileSync('data.txt','utf8');
console.log('File read successfully '+data);
const data2 = fs.readFile('data.txt', 'utf8', (err, data) => {});
console.log('File read successfully!'+data2)
async function main() {
    const data3 = await fs1.readFile('data.txt','utf8');
    console.log('File read successfully');
}

main();
const data3 = fs.writeFile('data.txt', 'Hello Node.js', (err) => {
if (err)
    console.log(err)
else
  console.log('File written successfully');
});