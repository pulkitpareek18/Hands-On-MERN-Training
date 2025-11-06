// Practice Session on all concepts covered so far

// Name: nikunj agarwal
// Age: 19
// Date: 05-11-2025
// Time Start: 16-40
// Time End:

// 1. Variables and Data Types

//variable declarations:- three ways to declare variables in JS
// let name = "Nikunj agarwal";
// const age = 25;
// var date = "2024-06-15";


//data types:-
//let iamstudent= true; //boolean
//let height= 5.11; //float
//let city = "jaipur"; //string
//let number = 2; //integer


//**************************************** */
// 2. Functions 
// function is used to perform a specific task

// let a = function add(x, y) {   
//     return x + y;
// }

//add(2, 3);  // the way to call the function

// ------arrow function-------
// let add =(x,y) => {
    //     return x + y;
        // }

        // arrow function is doing the same thing in single line and use return keyword with arrow function


//**************************************** */


// 3. Control Structures (if-else, loops)

// if - else statement is like a condition if this is not working then do this.
// Q1 : check if am i eligible for voting or not
// let a = 18; // thats our age

// if (a.+>=18) {
//     console.log("yes you are eligible for voting");
// } else {
//     console.log("no you are not eligible for voting");
// }

// loops:- for loop, while loop, do while loop
// for (let i = 1; i <= 5; i++) {
//     console.log(i);  // it will print 1 to 5
// }


// let i = 1;  // initialization
// while (i <= 5) {  
//     console.log(i);  // print the value of i
//     i++;  
// }

//do while loop
// let i = 1;  // initialization
// do {
//     console.log(i);  // print the value of i
//     i++;  
// } while (i <= 5);


// break and continue statement
// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         break;  // it will exit the loop when i is 5 this helps to break the loop before its actual end
//     }
//     console.log(i);  // print the value of i
// }

// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         continue;  // it will skip the iteration when i is 5 this helps to skip the value
//     }
//     console.log(i);  // print the value of i
// }

// 4. Arrays and Objects


// let fruits = ["apple", "banana", "mango", "grapes"]; // array declaration
// console.log(fruits); // print the array


// fruits.push("orange"); // adding an element to the array
//fruits.pop(); // removing the last element from the array
//fruits.shift(); // removing the first element from the array
//fruits.unshift("kiwi"); // adding an element to the beginning of the array
// console.log(fruits); // print the array after modification

// Accessing array elements :- you can use their number to access them and the index number starts from 0 . why 
// i dont know

// console.log(fruits[0]); // Output: apple
// console.log(fruits[1]); // Output: banana


// object declaration
// let person = {
//     name: "Nikunj agarwal",
//     age: 19,
//     city: "jaipur"
// }; // this is object because now every element has its own name

// console.log(person); // print the object

// Accessing object properties
// console.log(person.name); // Output: Nikunj agarwal
// console.log(person.age); // Output: 19

// 5. String Manipulation
// real life se mn nhi bhara isliye ab hum coding me bhi manipulation karenge 

// let str = "Hello, World!";

// // String length
// console.log(str.length); // Output: 13


// 6. Pattern Printing

// METHOD 1: Without using nested loops

// for( let i = 0; i <3; i++ ) {
//     console.log("*****************");
//     console.log("*       *       *");
//     console.log("*       *       *");
// }
// console.log("*****************");


// METHOD 2: Using 1 nested loop

// for( let i = 0; i <3; i++ ) {
//     for( let j = 0; j<17; j++ ) {
//         process.stdout.write("*");
//     }
//     console.log("");
//     console.log("*       *       *")
//     console.log("*       *       *")
// }
// console.log("*****************");

// METHOD 3: Using 2 nested loops

// for( let i = 0; i <3; i++ ) { 
//     for( let j = 0; j<17; j++ ) {
//         process.stdout.write("*");
//     }
//     console.log("");
//     for( let k = 0; k<2; k++ ) {
//         process.stdout.write("*       *       *\n");
//     }
// }
// console.log("*****************");

// METHOD 4: Using 3 nested loops

// for( let i = 0; i <3; i++ ) { 
//     for( let j = 0; j<17; j++ ) {
//         process.stdout.write("*");
//     }
//     console.log("");
//     for( let k = 0; k<2; k++ ) {
//         for( let l = 0; l<17; l++ ) {
//             if( l === 0 || l === 8 || l === 16 ) {
//                 process.stdout.write("*");
//             } else {
//                 process.stdout.write(" ");
//             }
//         }
//         console.log("");
//     }
// }
// console.log("*****************");

// METHOD 5: Using 4 loops

// for( let i = 0; i <3; i++ ) { 
//     for( let j = 0; j<17; j++ ) {
//         process.stdout.write("*");
//     }
//     console.log("");
//     for( let k = 0; k<2; k++ ) {
//         for( let l = 0; l<17; l++ ) {
//             if( l === 0 || l === 8 || l === 16 ) {
//                 process.stdout.write("*");
//             } else {
//                 process.stdout.write(" ");
//             }
//         }
//         console.log("");
//     }
// }
// for( let j = 0; j<17; j++ ) {
//     process.stdout.write("*");
// }


// this all method are used to print a window why five to  just to automate every thing.
// all doing same thing and second i copy paste it from the day4 folders file script.js:)



// 7. Array Iteration

// array itteration using for loop
// let colors = ["red", "green", "blue", "yellow"];
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }
// its is used to alter the value of array or to access the value of array one by one

// array  itteration es6 :- map method
// const upperCaseColors = colors.map(function(color) {
//     return color.toUpperCase();
// });
// console.log(upperCaseColors); // Output: [ 'RED', 'GREEN', 'BLUE', 'YELLOW' ]

//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ i dont understand the map function properly so yeah its a doubt 
// pura upper se gya h yeeee


