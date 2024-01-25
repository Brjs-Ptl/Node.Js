// const fs = require("fs");

// fs.writeFileSync("Mony.txt","Hello world"); // it create file in normal way 

// But i want to create file inside my already created file

const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname,"crud");
const filePath = `${dirPath}/monu.txt`;

// fs.writeFileSync(filePath,"Hello world what are you doing except me tell me tell me "); 

// to read that file which is created above
// fs.readFile(filePath,"utf8",(err, item) => {
//     console.log(item); //Hello world what are you doing except me
// });


// this things already created in file "Hello world what are you doing except me tell me tell me "
// after that we try to append "I know you people are not doing Anything"

// fs.appendFile(filePath,"I know you people are not doing Anything", (err) => {
//     if (!err) {
//         console.log("file is updated");
//     }
// });


// change the file name which created above
fs.rename(filePath,`${dirPath}/monuDada.txt`,(err)=>{
    if (!err) {
        console.log("file name is updated");
    }
});