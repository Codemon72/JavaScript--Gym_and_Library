// Create a function, called insurance(), that computes the cost of renting a car. The function takes 3 arguments: the age of the renter, the size of the car, and the number days for the rental. The function should return an integer number of the calculated total cost of the rental.

// Age (integer) : There is a daily charge of $10 if the driver is under 25

// Car Size (string) : There may be an additional daily charge based on the car size:

// car size surcharge "economy" $0 "medium" $10 "full-size" $15

// Rental Days (integer) : There is a base daily charge of $50 for renting a car. Simply multiply the one day cost by the number of days the car is rented in order to get the full cost.

// Note: Negative rental days should return 0 cost. Any other car size NOT listed should come with a same surcharge as the "full-size", $15.

// first attempt:
// const insurance = (age, size, numofdays) => {
//   const factorAge = (age < 25) ? 10 : 0;
//   let factorSize; 
//   switch(size) {
//     case "economy":
//       factorSize = 0;
//       break;
//     case "medium":
//       factorSize = 10
//       break;
//     case "full-size":
//       factorSize = 15;
//       break;
//     default:
//       factorSize = 15;
//   }
//   if (numofdays >= 0) {
//     return numofdays * (50 + factorAge + factorSize);
//   } else {
//     return 0;
//   }
// }

const insurance = (age, size, numofdays) => {
  let ageCharge = age < 25 ? 10 : 0
  let sizeCharge = size === 'economy' ? 0 : (size === 'medium' ? 10 : 15)
  return numofdays < 0 ? 0 : (50 + ageCharge + sizeCharge) * numofdays
}

console.log(insurance(18, "medium", 7)); // => 490
console.log(insurance(30,"full-size",30)); // => 1950
console.log(insurance(21,"economy",-10)); // => 0
console.log(insurance(42,"my custom car",7)); // => 455