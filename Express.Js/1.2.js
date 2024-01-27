const express = require("express");
const path = require("path");


// import html from another file which is ExcessHTMLcode and get it from here

const app = express();
const htmlPath = path.join(__dirname,"ExcessHTMLcode")

app.use(express.static(htmlPath)); // it clearly show when we open localhost:4200/about.html in h1 tags


app.listen(4200);