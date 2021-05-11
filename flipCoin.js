const read = require("readline-sync")
const coinFlip = () => {
  return (Math.random() < 0.5) ? 'Tails' : 'Heads';
}
console.log("number of times coin to be flipped? ")
const Times = read.questionInt();
let countTails = 0;
for (var i = 0; i < Times; i++) {
  if (coinFlip() === 'Tails') {
    countTails++;
  }
}
console.log("percentage of Tails " + (countTails / Times) * 100 + "% time than heads");
