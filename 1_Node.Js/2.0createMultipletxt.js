// const fs = require("fs");
// fs.writeFileSync("apple.txt","Hello Worls Again");

// Above create only one file in once which is apple.txt


// we want to create multiple file in one click
// here we create multiple file in one file

const fs = require("fs");
const path = require("path"); 
const dirPath = path.join(__dirname, "files");//path get from __dirname and in which file you want to write multiple file is here files

for (let i = 0; i < 5; i++) {
    fs.writeFileSync(`${dirPath}/hello${i}.txt`,"some simple text in file");
}


// for read file directry means path to check what content available there
// here we check how many file available ion specific file
fs.readdir(dirPath, (err, files) => {
    // console.log(files); // it give array of files
    files.forEach((items)=> {    // it give normal files
        console.log(items);
    });
});

//