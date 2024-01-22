// 1st step to check

// import {} from "./1.2.2exportImport"

// Cannot use import statement outside a module
// we can easily import export in javascript but not in Node.js

// how to use


// 2nd Step 

// const exportImport = require("./1.2.2exportImport")

// console.log(exportImport); // { a: 10, b: 20 }
// console.log(exportImport.a); // 10
// console.log(exportImport.b); // 20


// 3rd Step

const exportImport = require("./1.2.2exportImport")

console.log(exportImport); // { c: 10, d: 20, e: [Function: e] }
console.log(exportImport.e) // [Function: e]
console.log(exportImport.e()) // 10

