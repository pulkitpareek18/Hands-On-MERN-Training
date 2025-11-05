const numbers = [1, 2, 3, 4, 5];

// console.log(numbers)

// console.log(numbers[0])
// console.log(numbers[ 1 ])
// console.log(numbers[ 2 ])
// console.log(numbers[3])

// for ( let i = 0; i < numbers.length; i++) {
//     console.log("Value of i is: ", i);
//     console.log(numbers[i]);
// }


// numbers.forEach(function(number) {
//     console.log(number);
// });

// numbers.forEach(number => console.log(number));

// forEach is not a loop, it is a method that executes a provided function once for each array element.


// Iterating using while loop

// let i = 0;
// while (i < numbers.length) {
//     console.log(numbers[i]);
//     i++;
// }

// ES6 - map method

// const doubledNumbers = numbers.map(function(number) {
//     return number * 2;
// });

// console.log(doubledNumbers);

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// Real Life Example of map

// const users = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jane', lastName: 'Smith' },
//     { firstName: 'Emily', lastName: 'Jones' }
// ];

// const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);

// console.log(fullNames); // Output: [ 'John Doe', 'Jane Smith', 'Emily Jones' ]