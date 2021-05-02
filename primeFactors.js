
const primeFactors = (num) => {

   while (num % 2 == 0) {
      console.log("" + 2 + "");
      num = num / 2;
   }
   for (i = 3; i <= Math.sqrt(num); i = i + 2) {
      while (num % i == 0) {
         console.log("" + i + "");
         num = num / i;
      }
   }
   if (num > 2) {
      console.log("" + num + "");
   }
}

const num = prompt("Enter a number: ");
primeFactors(num);


