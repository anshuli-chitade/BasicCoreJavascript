
const read=require("readline-sync");
const calculate = (temp, wSpeed) => {
   
    if(temp<50 && wSpeed<120 && wSpeed>3){    
        const windChill = Math.round((35.74 + (0.6215 * temp)) + (((0.4275 * temp) - 35.75) * Math.pow(wSpeed, 0.16)));
        console.log("Wind Chill:" + windChill);    
    }
    else{
        console.log("please check temp should be less than 50 and speed should be less than 120 and greater than 3")
    }  
}
console.log("Enter the temperature")
const temp = read.questionInt();
console.log("Enter the wind speed")
const wSpeed = read.questionInt();
calculate(temp, wSpeed);

