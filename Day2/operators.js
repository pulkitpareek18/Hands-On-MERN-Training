// Assignment Operator (=)
let x = 5;
console.log(x);

// Addition Operator (+)
let a = 10;
let b = 20;
let sum = a + b;
console.log(sum);

// Subtraction Operator (-)
let difference = b - a;
console.log(difference);

// Multiplication Operator (*)
let product = a * b;
console.log(product);

// Division Operator (/)
let quotient = b / a;
console.log(quotient);

// Modulus Operator (%)
let remainder = b % a;
console.log(remainder);

// Increment Operator (++)
a++;  // a = a + 1
console.log(a);

// Decrement Operator (--)
b--; // b = b - 1
console.log(b);

// Exponentiation Operator (**)
let power = a ** 2; // a^2 = a * a a^3 = a * a * a
console.log(power);

// Comparison Operators
console.log(a == b);  // Equal to   
console.log(a != b);  // Not equal to
console.log(a > b);   // Greater than
console.log(a < b);   // Less than
console.log(a >= b);  // Greater than or equal to
console.log(a <= b);  // Less than or equal to

// Logical Operators
let p = true;
let q = false;

console.log(p && q); // Logical AND
console.log(p || q); // Logical OR
console.log(!p);     // Logical NOT

// String Concatenation Operator (+)
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);

// Typeof Operator
console.log(typeof firstName); // string
console.log(typeof a);         // number
console.log(typeof p);         // boolean
console.log(typeof person);    // object

// Strings

let greeting = "Hello, ad";
let name = 'Alice';
let message = `hi everyone`;

// 1. Double Quotes ("")   
// 2. Single Quotes ('')
// 3. Backticks (``) - Template Literals


// Strict Equality Operator (===) and Strict Inequality Operator (!==)

let num = 5;

console.log(num === 5);  // true
console.log(num !== 5);  // false

console.log(num === '5'); // false
console.log(num !== '5'); // true

console.log(num == '5');  // true

// While comparison operators (==, !=) check for value equality without considering type,
// strict operators (===, !==) check for both value and type equality, it make sure that the type is also same along with value.