// if( condition ) {
//     // code to be executed if condition is true
// }
// else {
//     // code to be executed if condition is false
// }

// If else example

let age = 15;

if( age >= 18 ) {
    console.log("You are an adult.");
}
else {
    console.log("You are a minor.");
}

// If else if else example // If else ladder

let score = 85;

if( score >= 90 ) {
    console.log("Grade: A");
}
else if( score >= 80 ) {
    console.log("Grade: B");
}
else if( score >= 70 ) {
    console.log("Grade: C");
}
else {
    console.log("Grade: F");
}

// Nested if example

let number = 10;

if( number > 0 ) {
    if( number % 2 === 0 ) {
        console.log("The number is a positive even number.");
    }
    else {
        console.log("The number is a positive odd number.");
    }
}
else {
    console.log("The number is not positive.");
}

// Switch case example

let day = 3;
let dayName;

switch( day ) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("Day:", dayName);

// Ternary operator example // Short hand if else

let xyz = 20;

// Syntax : condition ? expression1 : expression2;

if (xyz > 18) {
    console.log("xyz is greater than 18");
} else {
    console.log("xyz is not greater than 18");
}

// Using ternary operator

xyz > 18 ? console.log("xyz is greater than 18") : console.log("xyz is not greater than 18");


