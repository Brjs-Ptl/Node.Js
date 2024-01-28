// middleware in Single Page // restriction in single page
// reqFilter in same page
/*
const express = require("express");
const path = require("path");

const htmlPath = path.join(__dirname,"ExcessHTMLcode")

const app = express()

const reqFilter = (req,res,next) => {
    if (!req.query.age) {
        res.send("Please Provide Age")
    } else if (req.query.age < 18) { 
        res.send("You can't Access our Page")
    } else {
        next()
    }
}
// app.use(reqFilter);

// if we search http://localhost:4200/user?age=23 then it give result otherwise it demand user age
app.get("",(req,res) => {
    res.send(`Wow you are in Home Page`);
});

app.get("/about",(req,res) => {
    const tag = `<h3>Welcome to About Us Page</h3>`;
    const message = `<p> 
    Look back on 25 years in Search history, 
    honoring the most searched moments that have inspired the world 
    and the next generation to come. 
    </p>`;

    res.send(`${tag} <br> ${message}`);
});


app.get("/user",reqFilter,(req,res) => {  //restriction only working in this page and other one is run smoothly
    res.send(`Welcome to Users Page`);
});

app.listen(4200);
*/


// reqFilter import from another file // midleware working in require page
const express = require("express");
const reqFilter = require("./1.7.2middleware")

// const htmlPath = path.join(__dirname,"ExcessHTMLcode")

const app = express()


// if we search http://localhost:4200/user?age=23 then it give result otherwise it demand user age
app.get("",(req,res) => {
    res.send(`Wow you are in Home Page`);
});

app.get("/about",(req,res) => {
    const tag = `<h3>Welcome to About Us Page</h3>`;
    const message = `<p> 
    Look back on 25 years in Search history, 
    honoring the most searched moments that have inspired the world 
    and the next generation to come. 
    </p>`;

    res.send(`${tag} <br> ${message}`);
});


app.get("/user",reqFilter,(req,res) => {  //restriction only working in this page and other one is run smoothly
    res.send(`Welcome to Users Page`);
});

app.listen(4200);


// 