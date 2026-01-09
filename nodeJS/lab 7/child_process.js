const { exec } = require('child_process');

exec('node --version', (err,stdout, stderr) => {
    if (err) {
        console.error(`Error executing command: ${err.message}`);
       return;
    }
    if (stderr) {
        console.error(`Command stderr:${stderr}`);
         return;
    }
    console.log(`Command output:\n${stdout}`);
});


// const { exec } = require("child_process");
// exec("node -v", (error, stdout, stderr) => {
//     if (error) {
//         console.log("Error:", error.message);
//         return;
//     }
//     if (stderr) {
//         console.log("Stderr:", stderr);
//         return;
//     }
//     console.log("Node Version:", stdout);
// });