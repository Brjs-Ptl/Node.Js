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
console.log(arr); [2,4,6,4,7,9,2]
console.log(arr[1]); //4 
console.log(arr[-1]); // undefine negative indexing not work