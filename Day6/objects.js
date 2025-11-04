// Objects

// An object is a collection of related data and/or functionality (which usually consists of several variables and functions — which are called properties and methods when they are inside objects).

// Creating an object using object literal syntax
// const car = {type:"Fiat", model:"500", color:"white"};
// console.log(car);

// let cartype = "fiat";
// let carmodel = "500";
// let carcolor = "white";

// Instead of having separate variables, we can group them into an object
const myCar = {
    type: "Fiat",
    model: "500",
    color: "white"
};

console.log(myCar);

// Accessing object properties
console.log(myCar.type);   // Output: Fiat
console.log(myCar["model"]); // Output: 500

// Adding new properties to an object
myCar.year = 2020;
console.log(myCar);

// Modifying existing properties
myCar.color = "red";
console.log(myCar);

// Deleting properties
delete myCar.model;
console.log(myCar);

// This Keyword

// In object methods, 'this' refers to the object itself

// Object with methods
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }

// };

// console.log(person.fullName()); // Output: John Doe

// const mern = {
//     frontEnd: "React",
//     backEnd: "Node.js",
//     database: "MongoDB",
//     getStack: function() {
//         return `${this.frontEnd}, ${this.backEnd}, ${this.database}`;
//     }
// }

// console.log(mern.getStack()); // Output: React, Node.js, MongoDB