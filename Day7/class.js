// Classes & Objects

// Class Syntax

// class Person { // Person() -> To create an object
//     // Method
//     greet() {
//         console.log(`Hello, my name is Samiksha.`);
//     }
// }

// // Creating an Object
// const person1 = new Person();

// person1.greet(); // Output: Hello, my name is Samiksha.

// What is Constructor?
// A special method for creating and initializing an object created with a class.

class Person {  
    // Constructor
    constructor(name, age) {  // Person('name', 30) -> To create an object
        this.name = name;
        this.age = age;
    }
    // Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    // Getter
    getDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    // Setter
    setDetails(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Creating an Object
// const person1 = new Person('Alice', 30);
// person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

const kriti = new Person('Kriti', 18);
kriti.greet(); // Output: Hello, my name is Kriti and I am 18 years old.

const ayyan = new Person('Ayyan', 20);
ayyan.greet(); // Output: Hello, my name is Ayyan and I am 20 years old.
ayyan.getDetails(); // Output: Name: Ayyan, Age: 20  // Getter
ayyan.setDetails('Ayyan', 24);  // Setter
ayyan.getDetails(); // Output: Name: Ayyan, Age: 24

console.log(ayyan.age)
console.log(kriti.age)