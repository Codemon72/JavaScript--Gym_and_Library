// CodeWars
// Simple kata, simple rules: your function should accept the inputs 4 and 7. If 4 is entered, the function should return 7. If 7 is entered, the function should return 4. Anything else entered as input should return 0. There's only one catch, your function cannot include if statements, switch statements, or the ternary operator (or the eval function due to the fact that you can get around the if requirement using it).

// There are some very simple ways of answering this problem, but I encourage you to try and be as creative as possible.


// Doesn't work with n = 0:
// const fourSeven = (n) => {
//   const array = [0, 0, 0, 7, 0, 0, 4];
//   return array.indexOf(n) +1;
// }

// Solution:
// const fourSeven = (n) => {
//   const fourSevenSwapper = {
//     4 : 7,
//     7 : 4
//   };
//   return fourSevenSwapper[n] || 0;
// }

// even shorter:
const fourSeven = (n) => {
  return {7:4, 4:7}[n] || 0;
}

console.log(fourSeven(4));