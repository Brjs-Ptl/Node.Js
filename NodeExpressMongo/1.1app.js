const express = require("express");
const dbConnect = require("./1.0mongoMainFile");

const app = express();

app.use(express.json()); // if Data post from Postman and receive/get in here i.e in terminal

app.get("/",async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    // console.log(data);
    res.send(data)
});

app.post("/",(req,res) => {
    console.log(req.body);           // it print the posted data through postman
    res.send(req.body)   // same data send to postman to see the data in their output section
})

app.listen(4200);  // this can be also see in postman
