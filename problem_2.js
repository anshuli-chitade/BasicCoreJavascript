
const coinFlip = () => {
  return (Math.random() < 0.5) ? 'Tails' : 'Heads';
}

const Times = prompt("number of times coin to be flipped? ");
const countTails = 0;
for (var i = 0; i < Times; i++) {
  if (coinFlip() === 'Tails') {
    countTails++;
  }
}
console.log("percentage of Tails " + (countTails / Times) * 100 + "% time than heads");
