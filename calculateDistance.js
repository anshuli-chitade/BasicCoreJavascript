const read = require("readline-sync");
const calculate = (x, y) => {
    const distance = Math.sqrt(Math.pow(x - 0, 2) + Math.pow(y - 0, 2));
    console.log(`distance from origin to the point (${x}, ${y}) is: ` +distance);
}

console.log("Enter x co-ordinate")
const x = read.questionInt();
console.log("Enter y co-ordinate")
const y = read.questionInt();
calculate(x, y);


