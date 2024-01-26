/*
// Create web Page or response of page
const express = require("express");

const app = express();

app.get("",(req, res) => {
    res.send("Hello World, this is Home Page")  // it clearly show when we open localhost:4200
});

app.get("/about",(req, res) => {
    res.send("Hello World, this is About Us Page") // it directly not open it open when we open localhost:4200/about
});

app.listen(4200)

const express = require("express");
*/

// Request query

const express = require("express");
const app = express();

app.get("",(req, res) => {
    console.log("data send by brouser =>>", req.query.name); // if you search localhost:4200?name=brijesh then it show in terminal who was request // output: data send by brouser =>> brijesh
    res.send("Hello World, this is Home Page")  // it clearly show when we open localhost:4200
});

app.get("/about",(req, res) => {
    res.send("Hello World, this is About Us Page") // it directly not open it open when we open localhost:4200/about
});

app.listen(4200)