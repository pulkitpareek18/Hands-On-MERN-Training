// Destructuring in JavaScript

// Array Destructuring
// const rgb = [255, 200, 100];
// const red = rgb[0];
// const green = rgb[1];
// const blue = rgb[2];

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

// Using destructuring to simplify the above code
// const [red, green, blue] = rgb;
// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

// When it'll work?
// Destructuring works with any iterable (like arrays) and objects and the number of variables on the left side should match the number of elements in the iterable or properties in the object being destructured.


// Object Destructuring
// const person = {
//     name: 'Alice',
//     age: 30,
//     city: 'New York'
// };

// Without destructuring
// const name = person.name;
// const age = person.age;
// const city = person.city;

// console.log(`Name: ${name}, Age: ${age}, City: ${city}`);

// Using destructuring to simplify the above code
// const { name, age, city } = person;
// console.log(`Name: ${name}, Age: ${age}, City: ${city}`);

// Make sure the variable names match the property names in the object for object destructuring to work correctly.