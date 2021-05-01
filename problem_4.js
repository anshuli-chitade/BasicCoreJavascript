
const number = prompt("Enter a number");

if (number < 31) {
    for (i = 1; i <= number; i++) {
        const power = Math.pow(2, i);
        console.log("2^" + i + " is " + power + " ");
    }
} else {
    console.log("value entered should be less than 31");

}
