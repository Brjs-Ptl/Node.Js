const express = require("express");
const dbConnect = require("./mongoDbMainFile");
const mongodb = require("mongodb") // require for delete method

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

// ---------------------Put Data----------------------------
// put method is working on data which is already available
// in this code we can change all details


app.put("/:name", async (req, res) => {    
    let data = await dbConnect();
    let result = data.updateOne(
        {name:req.params.name},   // data which you have to update
        {$set:req.body}    // in which catagory you want to change we can change one or more data
        )
    res.send({result:"Updated"})
    
});

app.delete("/:id", async (req,res) => {
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send(result)
})

app.listen(5000);  // this can be also see in postman
