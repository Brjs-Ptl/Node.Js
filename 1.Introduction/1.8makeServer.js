const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {"content-Type":"application\json"});
    res.write(JSON.stringify({name:"Brijesh", email:"ibrijeshpatel@outlook.com", Phone_Number: 96124}));
    res.end();
}).listen(5000);

// when we open localhost:5000 in web it give {"name":"Brijesh"}
// when we past http://localhost:5000/(copy the link from web) and pest in postman and get data it also give same result {"name":"Brijesh"}