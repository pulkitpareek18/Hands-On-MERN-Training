// Functions

// function greet() {
//     console.log(`Hello, World!`);
// }

// greet();

// DRY - Don't Repeat Yourself
// Instead of repeating code, we use functions to encapsulate reusable logic.


// function printTable(number){
//     for(let i = 1; i <= 10; i++){
//         console.log(`${number} x ${i} = ${number * i}`);
//     }
// }

// printTable(2);
// printTable(10);

// function printStarPattern(start,end){
//     for( let i = start; i <=end; i++ ) { // 2nd iteration i = 2
//         for( let j = 1; j <= i; j++){  // 2nd iteration j = 1, i = 2
//             process.stdout.write("*");  // prints * without new line
//         }
//         console.log(""); // moves to next line after inner loop completes
//     }
// }

// printStarPattern(5,15);

// Return Statement

// function add(a, b){
//     return a + b;
// }

// let sum = add(5, 10);
// console.log(sum);

// console.log(add(2,3));

// Arrow Functions

// function add(a, b){
//     return a + b;
// }

// const add = (a,b) => a + b;

// console.log(add(3,4));

// const add = (a,b) => {
//     return a + b;
// }

// console.log(add(3,4));

// This Keyword

// function showThis() {
//     console.log(this);
// }

// showThis(); // In non-strict mode, this refers to the global object (window in browsers)
