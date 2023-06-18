
The max() method returns the number with the highest value.

**Tip**: The min() method returns the number with the lowest value.


### Syntax
`Math.max(n1, n2, n3, ..., nX)`

### Parameters
Optional. One or more numbers to compare

### Return Value
- The highest number of the arguments.
- `-Infinity` if no arguments are given.
- `NaN` if one of the arguments is not a number.

**Tip**: Enter an array by way of the spread operator:
```js
const arr = [9, 3, 1];
const max = Math.max(...arr);
```

source: https://www.w3schools.com/jsref/jsref_max.asp

### Examples:

```js
// Return the highest and lowest number from a number string
let numberString = "1 2 -3 4 5";

function highAndLow(numberString) {
  // Split the numbers string into an array of individual number strings
  numberArray = numberString.split(' ');

  // Math.max() returns the maximum number from the array
  // Math.min() returns the minimum number from the array
  // The spread syntax (...) spreads the array elements as individual arguments
  return `${Math.max(...numberArray)} ${Math.min(...numberArray)}`;
}

console.log(highAndLow(numberString));
```