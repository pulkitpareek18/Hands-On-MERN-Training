
//Variables and Data Types
let name = "Samiksha";
const age = 18;
var isStudent = true;
console.log("Name: " + name);
console.log("Age: " + age);
console.log("Is Student: " + isStudent);    



//Functions
function greet(name) {
  return "Hello" + name + "!";
}
console.log(greet(" Samiksha"));



//Control Structures (if-else, loops)
let marks = 75;

if (marks >= 50) {
  console.log("You passed!");
} else {
  console.log("Try again!");
}

for (let i = 1; i <= 3; i++) {
  console.log("Count: " + i);
}



//Arrays and Objects
let friends = ["Shivani", "Kriti", "Ananya"];
console.log(friends);

let student = {
  name: "Samiksha",
  age: 18,
  course: "Web Development"
};
console.log(student);



//String Manipulation
let message = "JavaScript is fun";
let upperCaseMsg = message.toUpperCase();
let part = message.slice(0, 10);
console.log(upperCaseMsg);
console.log(part);  
console.log(message);



//Pattern Printing
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}



//Array Iteration
let numbers = [2, 4, 6, 8];

numbers.forEach(function(num) {
  console.log(num);
});