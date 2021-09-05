// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// first solution:
// const reverseWords = (str) => {
//   // turn into array
//   let tempArray = str.split(' ');
//   // reverse array
//   let tempReversed = tempArray.reverse();
//   // turn back into string
//   let reversedStr = tempReversed.join(' ')
//   return reversedStr;
// }

// in one line:
const reverseWords = (str) => {
  return str.split(' ').reverse().join(' ');
};

const str = "The greatest victory is that which requires no battle";

console.log(reverseWords(str));