

// using Promise

let a = 10;
let b = 0;

// setTimeout(() => {
//     b = 20;
// }, 2000);

// console.log(a+b); // it print 10


// to resolve this issue using Promise

const waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20)
    }, 2000);
        
});

waitingData.then((b) => {
    console.log(a+b);
});
