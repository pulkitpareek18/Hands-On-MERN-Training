// ans1 arrays//
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);

// adding an element
numbers.push(60);
console.log(numbers);

// removing the first element
numbers.shift();
console.log(numbers);

// finding the index of an element
const index = numbers.indexOf(40);
console.log(numbers.indexOf(40));

// ans2 functions//
function sumOfSquares(a, b) {
    return (a * a) + (b * b);
}
console.log(sumOfSquares(5, 3));

// ans3 objects//
let book = {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    year: 1997,
    getDetails: function() {
        return this.title + " by " + this.author + " (" + this.year + ")";
    } 
};
console.log(book.getDetails());

// ans4 sets//
let items = new Set();
items.add("book");
items.add("notebook");
items.add("pen");
console.log(items);
items.delete("notebook");
console.log(items);
console.log(items.has("pen"));
