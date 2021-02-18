checks if all elements in an array pass a test (provided as a function)

The every() method executes the function once for each element present in the array:

- If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
- If no false occur, every() returns true

**Note**: every() does not execute the function for array elements without values.

**Note**: every() does not change the original array

Return value: A Boolean. Returns true if all the elements in the array pass the test, otherwise it returns false

Example:

```js
const ages = [32, 33, 16, 40];

const checkAdult = (age) => {
  return age >= 18;
}

ages.every(checkAdult);
``` 

source: https://www.w3schools.com/jsref/jsref_every.asp