const express = require("express");
const dbConnect = require("./1.0mongoMainFile");

const app = express();

app.get("",async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data)
});

app.listen(4200);  // this can be also see in postman

git config --global user.email "you@example.com"
  git config --global user.name "Your Name"
