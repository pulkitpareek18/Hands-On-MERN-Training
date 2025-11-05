// Sets in JavaScript
// Sets are collections of unique values. They can store any type of value, whether primitive or object references.

// Use Cases of Sets in Real World Applications
// 1. Removing Duplicates from an Array
// 2. Storing Unique User IDs
// 3. Tracking Visited Pages
// 4. Implementing Tags or Categories

// Creating a Set
// const mySet = new Set();

// // Adding values to the Set
// mySet.add(1);
// mySet.add(5);
// mySet.add('Hello');
// mySet.add({ name: 'John' });
// mySet.add(1); // Duplicate, will not be added

// console.log(mySet); // Output: Set(4) { 1, 5, 'Hello', { name: 'John' } }

// const mySet = new Set([1, 5, 'Hello', { name: 'John' }, 1]); // Duplicate 1 will be ignored
// console.log(mySet); // Output: Set(4) { 1, 5, 'Hello', { name: 'John' } }

// Removing Duplicates from an Array
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// console.log(numbers)

// const uniqueNumbers = new Set(numbers);
// console.log(uniqueNumbers); // Output: Set(5) { 1, 2, 3, 4, 5 }

// // Converting Set back to Array
// const uniqueArray = Array.from(uniqueNumbers);
// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]