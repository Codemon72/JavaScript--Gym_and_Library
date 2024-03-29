// Coding in function isolateIt. function accept 1 parameters arr, it's a string array. Your task is to put a character "|" into the middle of each element.

// If the string length is an even number, use the insert method. for example: "abcd" should became "ab|cd". "|" should be inserted between ab and cd.

// If the string length is an odd number, use the replacement method. for example: "abcde" should became "ab|de". Character c will be replaced by |.

// The original array should not be changed, you need to return a new array(if you use the map method, you do not need to worry about this).

// Example
// isolateIt(["abcd","efgh"]) should return ["ab|cd","ef|gh"]
// isolateIt(["abcde","fghij"]) should return ["ab|de","fg|ij"]
// isolateIt(["1234","56789"]) should return ["12|34","56|89"]

// First attempt:
// const isolateIt = (arr) => {
//   return arr.map(string => {
//     let arrayFromString = string.split('');
//     // if string.length is even: insert method
//     if (arrayFromString.length % 2 === 0){
//       arrayFromString.splice((arrayFromString.length / 2), 0, '|')
//     }
//     // if string.length is uneven: replacement method
//     if (arrayFromString.length % 2 !== 0){
//       arrayFromString.splice((arrayFromString.length / 2), 1, '|')
//     }
//     return arrayFromString.join('');
//   })
// };

// Amazingly more simple:
const isolateIt = (arr) => {
  return arr.map(s => s.slice(0, s.length/2) + '|' + s.slice(-s.length/2))
};


console.log(isolateIt(["abcd","efgh"])); // expected output: ["ab|cd","ef|gh"]);
console.log(isolateIt(["abcde","fghij"])); // expected output: ["ab|de","fg|ij"]);
console.log(isolateIt(["1234","56789"])); // expected output: ["12|34","56|89"]);