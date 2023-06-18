The `min()` method returns the number with the lowest value.

Absolute value describes the distance from zero that a number is on the number line, without considering direction. The absolute value of a number is never negative.

**Tip**: The `max()` method returns the number with the highest value.

### Syntax

`Math.min(n1, n2, n3, ..., nX)`

### Parameter Values

- Optional. One or more numbers to compare.

**Return Value**:	A Number, representing the lowest number of the arguments, or **Infinity** if no arguments are given, or **NaN** if one or more arguments are not numbers.

source: https://www.w3schools.com/jsref/jsref_min.asp

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