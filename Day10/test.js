let darkMode = false;

function toggleDarkMode() {
    darkMode = !darkMode;
    return darkMode;
}

console.log(toggleDarkMode()); // true
console.log(toggleDarkMode()); // false
console.log(toggleDarkMode()); // true
console.log(toggleDarkMode()); // false            