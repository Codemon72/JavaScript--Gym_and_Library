// https://www.codewars.com/kata/59fab1f0c9fc0e7cd4000072/train/javascript
// https://shiffman.net/a2z/text-analysis/
// https://www.youtube.com/watch?v=tE-ZYXU8A8U&list=PLRqwX-V7Uu6bZQkJcGM5S9fn9R9Yyd8iZ

// In this Kata, we are going to see how a Hash (or Map or dict) can be used to keep track of characters in a string.

// Consider two strings "aabcdefg" and "fbd". How many characters do we have to remove from the first string to get the second string? Although not the only way to solve this, we could create a Hash of counts for each string and see which character counts are different. That should get us close to the answer. I will leave the rest to you.

// For this example, solve("aabcdefg","fbd") = 5. Also, solve("xyz","yxxz") = 0, because we cannot get second string from the first since the second string is longer.

const solve = (a, b) => {
//  ToDo
// make a map of a and a map of b
// compare both maps
console.log(text);
}


// console.log(solve("xyz","yxz")); // => 0
// console.log(solve("abcxyz","ayxz"));// => 2
// console.log(solve("abcdexyz","yxz")); // => 5
// console.log(solve("axyyz","yxxz")); // => 0
// console.log(solve("abdegfg","ffdb")); // => 0
// console.log(solve("aabcdefg","fbd")); // => 5
// console.log(solve("aabcdefg","fdb")); // => 5
