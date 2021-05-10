
const calculate = (temp, wSpeed) => {
    const windChill = Math.round((35.74 + (0.6215 * temp)) + (((0.4275 * temp) - 35.75) * Math.pow(wSpeed, 0.16)));
    console.log("Wind Chill:" + windChill);
}

const temp = prompt("Enter the temperature");
const wSpeed = prompt("Enter the wind speed");
calculate = (temp, wSpeed);

