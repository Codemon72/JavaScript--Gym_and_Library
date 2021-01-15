// Create a function shuffleIt. 
// The function accepts two or more parameters. 
// The first parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays. 
// Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds). 
// For every such array, swap the elements. Try to use all your new skills: arrow functions, the spread operator, destructuring, and rest parameters.


const shuffleIt = (arr, ...xArrays) => {
  console.log(xArrays.length);
  // for (let i = 0; i <= xArrays.length; i++){
  //   return i;
  // }
};


console.log(shuffleIt([1,2,3,4,5],[1,2,3]));

// console.log(shuffleIt([1,2,3,4,5], [1,2], [3,4]));

// console.log(shuffleIt([1,2,3,4,5], [1,2], [3,4], [2,3]));

