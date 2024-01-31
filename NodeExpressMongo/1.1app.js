const express = require("express");
const dbConnect = require("./1.0mongoMainFile");

const app = express();

app.use(express.json()); // if Data post from Postman and receive/get in here i.e in terminal

// ----------Get Data----------
app.get("/",async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data)
});

// -------------Post Data--------------

// ------for clearity----------
// app.post("/",(req,res) => {
//     consol/e.log(req.body);           // it print the posted data through postman
//     res.send(req.body)   // same data send to postman to see the data in their output section
// })


// -------------- Post Data-----------------

app.post("/", async (req,res) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body);   // if one data can be send use this and for multiople use data.insertMany 
    res.send(result)
});
app.listen(5000);  // this can be also see in postman
