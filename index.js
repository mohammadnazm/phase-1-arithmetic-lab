// Task 1
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;

// Task 2
const random = Math.floor(Math.random() * 10) + 1; // Generates a random integer between 1 and 10

// Task 3
const num3 = 40;
const num4 = 6;
const mod = num3 % num4;

// Task 4
const max = Math.max(2, 5, 8, 11, 20);

// Testing the results (optional)
console.log("Multiply:", multiply);
console.log("Random:", random);
console.log("Mod:", mod);
console.log("Max:", max);

// Exporting variables for testing (do not remove this line)
module.exports = { multiply, random, mod, max };
