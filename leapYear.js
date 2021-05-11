const read = require("readline-sync");
var year = read.question("enter a year:" + " ")
const len = year.length;

const checkyear = (year) => {
  if (year % 400 == 0) {
    return true;
  }
  if (year % 100 == 0) {
    return false;
  }
  if (year % 4 == 0) {
    return true;
  }
}

if (len<4) {
  console.log(" an year should be 4 digit");
}

else {
  console.log(checkyear(year) ? "is a leap year" : "not a leap year");
}
