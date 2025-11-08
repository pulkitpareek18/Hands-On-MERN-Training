// Practice Session on all concepts covered so far

// Name: 
// Age:
// Date:
// Time Start:
// Time End:

// 1. Variables and Data Types
let book="Murakami Haruki";
const age = 25;
let year="1987";
var isAuthor = true;
console.log(book);
console.log(age);
console.log(year);
console.log(isAuthor);

// 2. Functions
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Kriti");

function add(a, b){
    return a + b;
}   


// 3. Control Structures (if-else, loops)
let num=7;  
if (num > 5) {
    console.log("Number is greater than 5");
} else {
    console.log("Number is less than or equal to 5");
}

for (let i = 1; i <= 5; i++) {
    console.log("Number is", i);
}


// 4. Arrays and Objects
let bikes = ["Royal Enfield", "Ducati", "BMW"];

let person = {
    name: "Kriti",
    age: 19,
    isStudent: true
};


// 5. String Manipulation
let str="Hii ! I am Kriti"
console.log(str);
let str2="I am a student"
console.log(str2);
console.log(str + " " + str2);
console.log(str.length);
let result = str.toUpperCase()
console.log(result);
let result2 = str2.toLowerCase()
console.log(result2);

// 6. Pattern Printing
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}

// 7. Array Iteration

const cars = ["toyota", "honda", "ford", "bmw"];

for ( let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
