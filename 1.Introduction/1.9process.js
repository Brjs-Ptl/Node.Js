// console.log(process); // it print multiple details procees output etc etc

console.log(process.argv);// it give our file save location and which file we run

// After this if we wtite path in terminal and then some message it will print and this we can write again and again

// Ex - node Node.JS/1.Introduction/1.9process.js Bakri ka Bacha
// O/P-[
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\ibrij\\Programming By Brijesh\\Coding\\Node.JS\\1.Introduction\\1.9process.js',
//   'Bakri',
//   'ka',
//   'Bacha'
// ]


 // And then we retrive this message their index all things

//  console.log(process.argv[3]); // ka
//  console.log(process.argv[0]); // C:\Program Files\nodejs\node.exe

// to Create file

const fs = require("fs");

const input = process.argv; 
fs.writeFileSync(input[2],input[3]);

// it give output in created text file 

