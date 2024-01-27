const express = require("express");
const path = require("path");


const app = express();
const htmlPath = path.join(__dirname,"ExcessHTMLcode")

app.set("view engine", "ejs");

app.get("",(req, res) => {        // creating home page so here we onlu "" use before (req, res).
res.sendFile(`${htmlPath}/home.html`)
});

app.get("/profile",(req, res) => {        // profile comes under view and this view file inside the main branch and same as where your file store #Express.js  
res.render("profile");
});

app.get("/details",(req, res) => {        // profile comes under view and this view file inside the main branch and same as where your file store #Express.js 
    const user = {
        name:"Brijesh",
        age: 27,
        sex: "Male",
        email:"ibrijeshpatel@outlook.com",
        skils:["Python","JavaScript","HTML","CSS","NodeJS","REST API","Bootstrap"]
    }
res.render("details",{user});
});

app.get("/login",(req, res) => {        // profile comes under view and this view file inside the main branch and same as where your file store #Express.js  
res.render("login");
});

app.get("/help",(req, res) => {        /// if someone access another page which is not available then it show help page (any one chosen)
res.sendFile(`${htmlPath}/help.html`)
});

app.listen(4200);
