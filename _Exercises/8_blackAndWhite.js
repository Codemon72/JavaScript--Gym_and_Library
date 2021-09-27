// Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

// If arr is not an array, function should return:
// "It's a fake array"

// If arr contains elements 5 and 13, function should return:
// "It's a black array"

// If arr contains neither 5 nor 13, function should return:
// "It's a white array"

const blackAndWhite = (arr) => {
  if (!Array.isArray(arr)) {
    return "It's a fake array";
  } else if (arr.indexOf(5) >= 0 && arr.indexOf(13) >= 0) {
    return "It's a black array";
  } else if (arr.indexOf(5) == -1 || arr.indexOf(13) == -1) {
    return "It's a white array";
  }
};

console.log(blackAndWhite(5, 13)); // "It's a fake array"
console.log(blackAndWhite([5, 13])); // "It's a black array"
console.log(blackAndWhite([6, 12])); // "It's a white array"
