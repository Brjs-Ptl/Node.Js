// By default feature in any programming language is called module
// 1. Global :- we cant import like console.log, function callback etc
// 2. NonGlobal : we have to import this like fs, Buffer etc


console.log("We Study here Core Modules");
console.log("Check output in explore section where all file appear");

// fs.writeFileSync("Hello.txt","Code Step by Step"); //ReferenceError: fs is not defined

// how to resolve
/*
const fs = require("fs")
fs.writeFileSync("Hello.txt","Code Step by Step"); // file created in hello.txt in explore where all file appear
fs.writeFileSync("Shree.txt2","Jai Shree Radhe"); // file created in Shree.txt in explore where all file appear

// to know directry name

console.log(__dirname); // /workspaces/Node.Js-Complete-Course-Youtube/1.Introduction
console.log("-->",__dirname); // --> /workspaces/Node.Js-Complete-Course-Youtube/1.Introduction
console.log("-->",__filename); // --> /workspaces/Node.Js-Complete-Course-Youtube/1.Introduction/1.3fileSystemCreateFile.js

*/

// if we import const fs = require("fs") it import all fs module and create burden in space 
// so we have to import only that file which we have to require so it does not take that much space

const fs = require("fs").writeFileSync; // it import only that particular module.
fs("abc.txt","Hello Honey Boney") // it does require to write fs.writeFileSync("abc.txt","Hello Honey Boney");.

// change the const name

const asd = require("fs").writeFileSync; 
asd("csd.txt","Hello Honey Boney") // its work