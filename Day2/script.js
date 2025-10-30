let x = 10;

console.log(x);
console.log("Hello, World!");

var y = 20;
console.log(y);


const z = 30;
console.log(z);

x = 100;
console.log(x);

y = 200;
console.log(y);

// z = 300 // Throws error when modified
// console.log(z);


// Difference between let and var

function testScope() {
    if (true) {
        let a = 50;
        var b = 60;
        console.log(a); // Accessible here
        console.log(b); // Accessible here
    }
    // console.log(a); // Unaccessible here, throws error
    console.log(b); // Accessible here
}

testScope();

// console.log(xx)

let xx = 10;

console.log(yy)

var yy = 20;

// let xx = 100; // Throws error when redeclared

var yy = 200; // No error when redeclared

console.log(xx);
console.log(yy);


// Hoisting example

console.log(m);
var m = 5;
console.log(m);

// console.log(n); // Throws error
let n = 10;
console.log(n);

