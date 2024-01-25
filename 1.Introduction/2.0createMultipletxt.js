// const fs = require("fs");
// fs.writeFileSync("apple.txt","Hello Worls Again");

// Above create only one file which is apple.txt

// i try to create multiple file in one click

// const fs = require("fs");

// const path = require("path"); //for this we need path

// const dirPath = path.join(__dirname,"files"); //path get from here but for file path we write "files" after the result
// console.log(dirPath);

// console.log(__dirname,"files"); // not working //another way to get path but for file path we write "files" after the result but it give wrong 

// // Below code is not working in this computer
// const fs = require("fs");
// const path = require("path"); 
// const dirPath = path.join(__dirname, "files");
// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,"some simple text in file");
// }

// so we try this

const fs = require("fs");
const path = require("path"); 

const dirPath = path.join(__dirname, "files");

if (!fs.existsSync(dirPath)) { // Check if the directory exists, if not, create it
    fs.mkdirSync(dirPath);
}

for (let i = 0; i < 5; i++) {
    fs.writeFileSync(`${dirPath}/hello${i}.txt`,"some simple text in file");
}


// for read file directry to check what content available there


fs.readdir(dirPath, (err, files) => {
    // console.log(files); // it give array of files
    files.forEach((items)=> {    // it give normal files
        console.log(items);
    });
});

//