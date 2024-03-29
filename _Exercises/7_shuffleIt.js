// Create a function shuffleIt.
// The function accepts two or more parameters.
// The first parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays.
// Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds).
// For every such array, swap the elements. Try to use all your new skills: arrow functions, the spread operator, destructuring, and rest parameters.

// const shuffleIt = (arr, ...xArrays) => {
//   for (let i = 0; i < xArrays.length; i++) {
//     let temp = arr[xArrays[i][0]];
//     arr[xArrays[i][0]] = arr[xArrays[i][1]];
//     arr[xArrays[i][1]] = temp;
//   }
//   return arr;
// };

const shuffleIt = (arr, ...xArrays) => {
  for ([a,b] of xArrays) [arr[a],arr[b]] = [arr[b],arr[a]];
  return arr;
}

console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2])); // expected: [1,3,2,4,5]

console.log(shuffleIt([1,2,3,4,5], [1,2], [3,4])); // expected: [1,3,2,5,4]

console.log(shuffleIt([1,2,3,4,5], [1,2], [3,4], [2,3])); // expected: [1,3,5,2,4]
