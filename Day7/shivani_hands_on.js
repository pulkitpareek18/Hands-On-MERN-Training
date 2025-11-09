// 1. variable and data types
let name = "Shivani";
let age = 18; 
let isStudent = true;
console.log(name);
console.log(age);
console.log(isStudent); 

// 2. functions
function greet(name) {
    return 'Hello, ' + name + '!';
}
console.log(greet('Shivani'));

//3. control structures(if-else, loops)
if (age >= 18) {
    console.log(` an adult.`);
} else {
    console.log(`is a minor.`);
}
for (let i = 1; i <= 5; i++) {
    console.log('Count:' + i);
}

// 4.arrays and objects
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

let person = {
    name: "Shivani",
    age: 18,
    isStudent: true
};
console.log(person);

//5. string manipulation
let message = "Hello";
console.log(message);
let upperMessage = message.toUpperCase();
console.log(upperMessage);
let replacedMessage = message.replace("Hello","World");
console.log(replacedMessage);

// 6. pattern printing
for (let i = 5; i <= 10; i++)
     {
    for(let j = 1; j <= i; j++)
        {
        process.stdout.write("*");
    }
        console.log();
    }

//7. array iteration
let colors = ["Red", "Green", "Blue"];
colors.forEach(function(color) {
    console.log(color);
});