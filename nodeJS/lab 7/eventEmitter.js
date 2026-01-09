const EventEmitter = require("events");
const a = new EventEmitter();

a.on("start",() => {
    console.log("start event triggered");
}); 
a.once("init",() => {
    console.log("Init event triggered only once");
}); 

a.emit("start");
a.emit("start");

a.emit("init");
a.emit("init");


// const EventEmitter = require("events");
// const myEmitter = new EventEmitter();
// myEmitter.on("welcome", () => {
//     console.log("Welcome Event Triggered!");
// });

// myEmitter.emit("welcome");