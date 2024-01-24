// console.log(process); // it print multiple details procees output etc etc

// console.log(process.argv);// it give our file save location and which file we run

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

// const fs = require("fs");

// const input = process.argv; 
// fs.writeFileSync(input[2],input[3]);

// it give output in created text file 
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\ibrij\\Programming By Brijesh\\Coding\\Node.JS\\1.Introduction\\1.9process.js',
//     'bakri.txt',
//     'Bakri ka Bacha'
// ]

const fs = require("fs");

const input = process.argv; 
if (input[2] == "add") {           // it add the written txt file in explorer
    fs.writeFileSync(input[3],input[4]);
} else if (input[2] == "remove") {  /// it remove the written txt file in explorer
    fs.unlinkSync(input[3]);
} else {
    console.log("invalid input");  // when not found add or remove then print invalid input
}   
// terminalinput given:-  node Node.JS/1.Introduction/1.9process.js add pice.txt "Are you a human or a pice of goat"
// here it check if in place of 2 is add then it create pice.txt file and put inside this message "Are you a human or a pice of goat"
// here add is in place of 2 and pice.txt is 3 and "Are you a human or a pice of goat" is 4

// it check add is in 2nd place then place 3 create txt file and place 4 is message
// place 0th is  'C:\\Program Files\\nodejs\\node.exe', created by systm
// place 1st is 'C:\\Users\\ibrij\\Programming By Brijesh\\Coding\\Node.JS\\1.Introduction\\1.9process.js', by system

// when it found 2nd place has remove then it delete the txt file which is written in 3 place either you have created previously or try to create at the time
