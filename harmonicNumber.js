
const har_no = (num) => {
    let sum = 0.0;
    for (let i = 1; i <= num; i++) {
        sum = sum + 1 / i;
    }
    console.log("Harmonic no. is " + sum + "");
}

const num = prompt("enter a number");
har_no(num);




