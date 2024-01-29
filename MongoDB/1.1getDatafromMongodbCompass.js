const {MongoClient} = require("mongodb");  // call mongoDb
const url = "mongodb://localhost:27017"; // put url which is available in mongoDb compass // its same foe all in local host
const dataBase = "e-commerse";  // file where we want to put data it is also created in mongoDb compass 
const client = new MongoClient(url);  // connect url with mongoDb  

async function getData(){              // using function with async and await
    let result = await client.connect();   // here it should wait until clint is connected to url
    let db = result.db(dataBase);
    let collection = db.collection("product"); // here we link where we want to store or get data // inside e-commerse mant table/file is available so you chose which one you require
    let response = await collection.find({}).toArray(); // it store all data which is in collection and show it in some format
    console.log(response); 
}

getData(); // call the data