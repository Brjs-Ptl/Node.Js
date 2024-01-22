/*

var a = 10; // new value assign 
let b = 20; // new value cant assign if assign its give error
const c = 30; // new value cant assign if assign its give error

console.log(a+b+c); // 60

var x = 20;

if (x == 20) {
    console.log("matched"); // matched
} else {
    console.log("not matched");
};

if (x === 20) {
    console.log("matched"); // matched it check value as well as type
} else {
    console.log("not matched");
};

if (x == "20") {
    console.log("matched"); // matched it check only value
} else {
    console.log("not matched");
};

if (x === "20") {
    console.log("matched"); // not matched it check value and type so type is not match here one is string and another one is number
} else {
    console.log("not matched");
};


for (i = 0; i <= 10; i++) {
    console.log(i) // it print 0 to 9
};

const arr = [2,4,6,4,7,9,2];
// console.log(arr); [2,4,6,4,7,9,2]
// console.log(arr[1]); //4 
// console.log(arr[-1]); // undefine negative indexing not work


const arr1 = [2,4,5,6,9,5];
for (i of arr1) {
    console.log(i); // [2,4,5,6,9,5]; it give value
}

const arr2 = [2,4,5,6,9,5];
for (i in arr2) {
    console.log(i); // [0,1,2,3,4,5]; // it give length
}

const arr3 = [2,4,5,6,9,5];
for (i of arr3) {
    if (i % 2 === 0) {
        console.log(i); // 2 4 6
    }
}

*/

// The filter() method creates a new array filled with elements that 
// pass a test provided by a function.

const arr4 = [2,4,5,6,9,5];

arr4.filter((item) => {
    console.log(item); // [2,4,5,6,9,5]
})

const arr5 = [2,4,5,6,9,5,5];

const result = arr5.filter((item) => {
    // return item === 5; // // [ 5, 5, 5 ]
    return item > 5; // [6, 9]
});
console.log(result); //
console.log(arr5.length); // 7

// core module already declair like console.log, fs(fileSystem), buffer HTTP etc 
    