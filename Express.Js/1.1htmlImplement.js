const express = require("express");
const app = express();

app.get("",(req, res) => {
    res.send("<h1>Hello World, this is Home Page</h1>")  // it clearly show when we open localhost:4200 in h1 tags
});

app.get("/about",(req, res) => {
    res.send("<h3>Hello World, this is About Us Page</h3>") // it directly not open it open when we open localhost:4200/about in h3 tags
});

app.get("/contact",(req, res) => {
    res.send(`
    <input type="text" placeholder="User Name"/>  <!-- create input place in web page -->
    <button type="submit">Click</button>  <!-- create button in page -->
    `) // it directly not open it open when we open localhost:4200/contact
});

app.get("/help",(req, res) => {
    res.send([
        {
            name: "Brijesh",
            age: 27,
            sex: "Male",
            email:"ibrijeshnitap@outlook.com"
        },
        {
            name: "Mohan",
            age: 27,
            sex: "Lord",
            email:"mohan@outlook.com"
        }
    ]) // it directly not open it open when we open localhost:4200/help
});

app.get("/detail",(req, res) => {
    res.send(`
    <h1>Welcome to Detail Page</h1> <a href="/about">Go to About Us Page</a>  <!-- it show link to go in About Us Page -->
    `) 
});

// Add data from Query Parameter and past to input block of contact2
// how to get value from parameter means someone write localhost:4200/contact2?name=Brijesh
app.get("/contact2",(req, res) => {
    res.send(`
    <input type="text" placeholder="User Name" value="${req.query.name}"/>  
    <button type="submit">Click</button>  
    `) 
});

app.listen(4200)


