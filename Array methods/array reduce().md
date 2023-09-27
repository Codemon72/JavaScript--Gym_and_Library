The reduce() method reduces the array to a single value.

The reduce() method executes a provided function for each value of the array (from left-to-right).

The return value of the function is stored in an accumulator (result/total).

**Note**: reduce() does not execute the function for array elements without values.

**Note**: This method does not change the original array.

#### Syntax

`array.reduce(function(total, currentValue, currentIndex, arr), initialValue)`

### Parameter Values

- function() - Required. A function to be run for each element in the array.
- total - Required. This is like a running total or storage where you keep track of the result as you process each element in the array.
- currentValue - Required. This represents the current element being processed from the array.
- currentIndex - Optional. The array index of the current element.
- arr - Optional. The array object the current element belongs to.

- initialValue - Optional. A value to be passed to the function as the initial value.

**Return Value**: Returns the accumulated result from the last call of the callback function.

Examples:

```js
const numbers = [50, 10, 10];

console.log(numbers.reduce(a, b) => a - b); // logs: 20

console.log(numbers.reduce(a, b) => a - b, 75); // logs: 5

console.log(numbers.reduce(a, b) => a - b, ''); // logs: '501010'
```

Calculated average:

```js
const average = (arr) => {
  return arr.reduce((a, b) => a + b) / arr.length
}
console.log(average([1, 2, 3, 4, 5])) //output: 3
```

Count something

```js
const arr = [1, 2, 3, 4, 5]
//count odd number (because 1 % 2 is 1 and the Boolean of 1 equates to true)
console.log(arr.reduce((a, b) => a + (b % 2 ? 1 : 0), 0)) // output: 3

//count even number:
console.log(arr.reduce((a, b) => a + (b % 2 ? 0 : 1), 0)) // output: 2
```

Task: convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
````js
function duplicateEncode(word) {
  // Convert the input string to lowercase to make the encoding case-insensitive.
  const characterArray = word.toLowerCase().split('')
  let newString = ''
  // Calculate the occurrences of each character and store them in an object.
  const occurrences = characterArray.reduce((acc, element) => {
    // If the character exists in the accumulator object, increment its count by 1.
    // Otherwise, initialize its count to 1.
    acc[element] = (acc[element] || 0) + 1
    return acc
  }, {})
  // console.log(occurrences)
  // Encode the string based on character occurrences.
  return characterArray.reduce((newString, element) => {
    // If the character occurred more than once, add ')' to the new string.
    // Otherwise, add '('.
    return newString + (occurrences[element] > 1 ? ')' : '(')
  }, '')
}
console.log(duplicateEncode('aJAdfghj'))
```
source: https://www.w3schools.com/jsref/jsref_reduce.asp
````
