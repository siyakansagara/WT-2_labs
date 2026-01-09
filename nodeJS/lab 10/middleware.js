const express = require('express');
 const app = express();

// function middleware(req,res,next){
//     console.log("Request URL:", req.url);
//     console.log("Request method:",req.method);
//     next();
// };
// app.use(middleware);

// app.get('/',(req , res)=>{
//     res.send("Welcome to home page ")
// });
// app.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
//  });

 app.get('/',(req,res,next)=>{
    const err = new Error ("Something went wrong");
    next(err);
 });

 app.user((err,req,res,next)=>{
    console.error("Error:",err.message);
    res.status(500).send("Internal server error ")
 })
 app.listen(3000, () => {
   console.log("Server running on http://localhost:3000");
});