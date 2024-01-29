// ----------------Phase One------------------
/*
const {MongoClient} = require("mongodb");  // call mongoDb
const url = "mongodb://localhost:27017"; // put url which is available in mongoDb compass // its same foe all in local host
const dataBase = "e-commerse";  // file where we want to put data it is also created in mongoDb compass 
const client = new MongoClient(url);  // connect url with mongoDb  

async function dbConnec(){              // using function with async and await
    let result = await client.connect();   // here it should wait until clint is connected to url
    let db = result.db(dataBase);
    return db.collection("product"); // here we link where we want to store or get data // inside e-commerse mant table/file is available so you chose which one you require
    // let response = await collection.find({name:"Shree Ram"}).toArray(); // it store all data which is in collection and show it in some format
    // console.log(response); 
}
console.log(dbConnec()); //when we print this it give Promise { <pending> }
*/


// ---------------so we use Promise otherwise Async Await for Handle this problem------------------

const {MongoClient} = require("mongodb"); 
const url = "mongodb://localhost:27017"; 
const dataBase = "e-commerse";  
const client = new MongoClient(url);  

async function dbConnect(){              
    let result = await client.connect();   
    let db = result.db(dataBase);
    return db.collection("product"); 
}

// dbConnect().then((resp) => {
//     console.log(resp); // it give to much data so we write below code
// })

// dbConnect().then((resp) => {
//     console.log(resp.find().toArray()); // it give Promise { <pending> }
// })

//---------------------------------------------------------------------
// dbConnect().then((resp) => {     // it give pending promise
//     resp.find().toArray().then((data) => {    // so here we again call promise to handle this and we get result
//         console.log(data);
//     });
// })
//------------------------------------------------------------------------------------

// we can also handle through this

const main = async () => {
    let data = await dbCommect();
    data = await data.find().toArray();
    console.log(data);
}
main();
