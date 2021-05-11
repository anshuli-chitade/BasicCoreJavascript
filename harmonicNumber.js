const read = require("readline-sync")
const har_no = (num) => {
    let sum = 0.0;
    for (let i = 1; i <= num; i++) {
        sum = sum + 1 / i;
    }
    console.log("Harmonic no. is " + sum + "");
}
console.log("enter a number")
const num = read.questionInt();
har_no(num);




