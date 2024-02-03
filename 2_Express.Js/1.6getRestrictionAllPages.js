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
app.use(reqFilter);

// if we search http://localhost:4200/user?age=23 then it give result otherwise it demand user age
app.get("",(req,res) => {
    res.send(`Welcome to Home Page`);
});

app.get("/user",(req,res) => {
    res.send(`Welcome to Users Page`);
});

app.listen(4200);


// 