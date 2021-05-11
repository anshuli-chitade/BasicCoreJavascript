const read=require("readline-sync");
const calculate=(a,b,c)=>{

let formula = b * b - 4 * a * c;

if (formula > 0) {
    root1 = (-b + Math.sqrt(formula)) / (2 * a);
    root2 = (-b - Math.sqrt(formula)) / (2 * a);
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
else if (formula == 0) {
    root1 = root2 = -b / (2 * a);
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-formula) / (2 * a)).toFixed(2);
    console.log(
        `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
    );
}
}

let root1, root2;
console.log("Enter the first number: ")
let a = read.questionInt();
console.log("Enter the second number: ")
let b = read.questionInt();
console.log("Enter the third number: ")
let c = read.questionInt();
calculate(a,b,c);
