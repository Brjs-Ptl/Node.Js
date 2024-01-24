// -----------------------------1st step----------------------------------

/*
const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {"content-Type":"application\json"});
    res.write(JSON.stringify({name:"Brijesh", email:"ibrijeshpatel@outlook.com", Phone_Number: 96124}));
    res.end();
}).listen(5000);

*/

// when we open localhost:5000 in web it give {"name":"Brijesh"}
// when we past http://localhost:5000/(copy the link from web) and pest in postman and get data it also give same result {"name":"Brijesh"}


// -----------------------2nd step-----------------------------

// if you have big data import from other file then what we have to do

const http = require("http");
const data = require("./1.8.2makeServerExport");

http.createServer((req, res) => {
    res.writeHead(200, {"content-Type":"application/json"}); // 200 = 0k, 201 = created, 404 = Not Found, 500 = Internal Servar Error.
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000);


// it give multiple data which have written in 1.8.2makeServerExport.