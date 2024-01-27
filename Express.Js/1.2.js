// Stage Code

/*
const express = require("express");
const path = require("path");


// import html from another file which is ExcessHTMLcode and get it from here

const app = express();
const htmlPath = path.join(__dirname,"ExcessHTMLcode")

app.use(express.static(htmlPath)); // it clearly show when we open localhost:4200/about.html in h1 tags


app.listen(4200);

*/

// Modify the Code to get Precise 

const express = require("express");
const path = require("path");


// import html from another file which is ExcessHTMLcode and get it from here

const app = express();
const htmlPath = path.join(__dirname,"ExcessHTMLcode")

app.get("",(req, res) => {        // creating home page so here we onlu "" use before (req, res).
res.sendFile(`${htmlPath}/home.html`)
});

app.get("/about",(req, res) => {        // here no need to use about.html in search bar
res.sendFile(`${htmlPath}/about.html`)
});

app.get("/help",(req, res) => {        /// here no need to use help.html in search bar
res.sendFile(`${htmlPath}/help.html`)
});

app.get("*",(req, res) => {        /// if someone access another page which is not available then it show help page (any one chosen)
res.sendFile(`${htmlPath}/notFound.html`)
});

app.listen(4200);
