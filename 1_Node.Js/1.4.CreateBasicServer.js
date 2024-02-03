console.log("Create Basic Server")
console.log("Function Parameter in Node")
console.log("Get Output in Brouser")

// 1 step creating Basic Server

// const http = require("http"); // it handle node.js request and responce

// http.createServer().listen(4500); // createServer() is a function which take all function as a parameter

const http = require("http"); 

http.createServer((req, res) => { // inside createServer() we create request and response parameter 
    res.write("Hello This is Brijesh");// request access inside the node.js and response give the response or output to clint
    res.end(); // it end the task after full fill the requirement
}).listen(4500);
 

// Through Arrow Function
// 

const dataControl = (req, res) => {
    res.write("Brijesh is Radh Rani fan");
    res.end();

};

http.createServer(dataControl).listen(4500);



