const express = require("express");
const EventEmitter = require("events");

const app = express();

// create an function to count every click

const event = new EventEmitter();
let count = 0;
event.on("countAPI",() => {       // on is a function of EventEmitter and inside on we send 2 parameter 1st is event name:countAPI and 2nd one is call back function:().
    count += 1;
    console.log("event called", count);
})

app.get("/", (req, res) => {
    res.send("API Called");
    event.emit("countAPI");
});
app.get("/search", (req, res) => {
    res.send("Search API Called");
    event.emit("countAPI");

});
app.get("/update", (req, res) => {
    res.send("Update API Called");
    event.emit("countAPI");

});

app.listen(5000);