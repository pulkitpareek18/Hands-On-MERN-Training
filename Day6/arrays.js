// let car1 = "Saab";
// let car2 = "Volvo";
// let car3 = "BMW";

// Storing using an object

const cars = {
    car1: "Saab",
    car2: "Volvo",
    car3: "BMW"
};

console.log(cars);

// Storing using an array

const carArray = ["Saab", "Volvo", "BMW"];

console.log(carArray);

// Accessing array elements
console.log(carArray[0]); // Output: Saab
console.log(carArray[1]); // Output: Volvo
console.log(carArray[2]); // Output: BMW


// Modifying array elements
carArray[1] = "Toyota";
console.log(carArray); // Output: ["Saab", "Toyota", "BMW"]

// Adding new elements to the array
carArray.push("Audi");
console.log(carArray); // Output: ["Saab", "Toyota", "BMW", "Audi"]

// Removing the last element from the array
carArray.pop();
console.log(carArray); // Output: ["Saab", "Toyota", "BMW"]

// Getting the length of the array
console.log(carArray.length); // Output: 3


// Difference between Arrays and Objects

// Arrays are ordered collections accessed by index
// Objects are collections of key-value pairs accessed by keys

