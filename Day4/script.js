// Loops

// for loop

// for ( initialization ; condition ; increment/decrement ) {
//     // code to be executed
// }

// for ( let i = 0; i < 5; i++ ) {
//     console.log("Sandeep");
// }

// Iteration Breakdown:


// i = 0; i<5   : true : console.log("Sandeep") : i++  - 1st iteration
// i = 1; i<5   : true : console.log("Sandeep") : i++  - 2nd iteration
// i = 2; i<5   : true : console.log("Sandeep") : i++  - 3rd iteration
// i = 3; i<5   : true : console.log("Sandeep") : i++  - 4th iteration
// i = 4; i<5   : true : console.log("Sandeep") : i++  - 5th iteration
// i = 5; i<5   : false : loop ends


// Print numbers from 1 to 10
// for ( let i = 1; i <=10; i++) {
//     console.log(i*2);
// }

// Print numbers from 1 to 10
// for ( let i = 2; i <=20; i = i+2) {
//     console.log(i);
// }

// i = 2, i<=20 : true : console.log(i) : i = i+2 => 2+2 = 4 - 1st iteration
// i = 4, i<=20 : true : console.log(i) : i = i+2 => 4+2 = 6 - 2nd iteration
// i = 6, i<=20 : true : console.log(i) : i = i+2 => 6+2 = 8 - 3rd iteration
// i = 8, i<=20 : true : console.log(i) : i = i+2 => 8+2 = 10 - 4th iteration
// i = 10, i<=20 : true : console.log(i) : i = i+2 => 10+2 = 12 - 5th iteration
// i = 12, i<=20 : true : console.log(i) : i = i+2 => 12+2 = 14 - 6th iteration
// i = 14, i<=20 : true : console.log(i) : i = i+2 => 14+2 = 16 - 7th iteration
// i = 16, i<=20 : true : console.log(i) : i = i+2 => 16+2 = 18 - 8th iteration
// i = 18, i<=20 : true : console.log(i) : i = i+2 => 18+2 = 20 - 9th iteration
// i = 20, i<=20 : true : console.log(i) : i = i+2 => 20   +2 = 22 - 10th iteration
// i = 22, i<=20 : false : loop ends




// for ( let i = 0; i<=50; i = i+5) {
//     console.log(i);
// }

// for ( let i = 5; i<=50; i = i+i) {
//     console.log(i);
// }


// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20

// let tableOf = 3;

// for ( let i = 1; i <=10; i++) {
//     console.log(tableOf*i);
//     console.log("HELLO")
// }


// for ( let i = 1; i <=10; i++) {
//     console.log(i**2);
// }


// for ( let i = 1; i <=10; i++) {
//     console.log(i**2);
// }

// console.log("************************");

// for( let i = 1; i <=8; i++ ) {
//     console.log("*                      *");
// }

// console.log("************************");        


// for( let i = 1; i <=8; i++ ) { // 2nd iteration i = 2

//     for( let j = 1; j <= i; j++){  // 2nd iteration j = 1, i = 2
//         process.stdout.write("*");  // prints * without new line
//     }
//     console.log(""); // moves to next line after inner loop completes
// }

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********


// q1: Print the following pattern using loops

// ***** 5 stars
// ******
// *******
// ********
// *********
// **********
// ***********
// ************
// *************
// **************
// ***************
// ****************
// *****************  15 stars


// q2. Print the following pattern using loops


// *****************
// *       *       *
// *       *       *
// *****************
// *       *       *
// *       *       *
// *****************
// *       *       *
// *       *       *
// *****************


// METHOD 1: Without using nested loops

// for( let i = 0; i <3; i++ ) {
//     console.log("*****************");
//     console.log("*       *       *");
//     console.log("*       *       *");
// }
// console.log("*****************");


// METHOD 2: Using 1 nested loop

// for( let i = 0; i <3; i++ ) {
//     for( let j = 0; j<17; j++ ) {
//         process.stdout.write("*");
//     }
//     console.log("");
//     console.log("*       *       *")
//     console.log("*       *       *")
// }
// console.log("*****************");

// METHOD 3: Using 2 nested loops

// for( let i = 0; i <3; i++ ) { 
//     for( let j = 0; j<17; j++ ) {
//         process.stdout.write("*");
//     }
//     console.log("");
//     for( let k = 0; k<2; k++ ) {
//         process.stdout.write("*       *       *\n");
//     }
// }
// console.log("*****************");

// METHOD 4: Using 3 nested loops

// for( let i = 0; i <3; i++ ) { 
//     for( let j = 0; j<17; j++ ) {
//         process.stdout.write("*");
//     }
//     console.log("");
//     for( let k = 0; k<2; k++ ) {
//         for( let l = 0; l<17; l++ ) {
//             if( l === 0 || l === 8 || l === 16 ) {
//                 process.stdout.write("*");
//             } else {
//                 process.stdout.write(" ");
//             }
//         }
//         console.log("");
//     }
// }
// console.log("*****************");

// METHOD 5: Using 4 loops

// for( let i = 0; i <3; i++ ) { 
//     for( let j = 0; j<17; j++ ) {
//         process.stdout.write("*");
//     }
//     console.log("");
//     for( let k = 0; k<2; k++ ) {
//         for( let l = 0; l<17; l++ ) {
//             if( l === 0 || l === 8 || l === 16 ) {
//                 process.stdout.write("*");
//             } else {
//                 process.stdout.write(" ");
//             }
//         }
//         console.log("");
//     }
// }
// for( let j = 0; j<17; j++ ) {
//     process.stdout.write("*");
// }
