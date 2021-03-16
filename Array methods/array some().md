checks if any of the elements in an array pass a test, returns true or false

The some() method checks if any of the elements in an array pass a test (provided as a function).

The some() method executes the function once for each element present in the array:

- If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)
- Otherwise it returns false

**Note**: some() does not execute the function for array elements without values.

**Note**: some() does not change the original array.

#### Syntax
`array.some(function(currentValue, index, arr), thisValue)`

Parameters

- function(currentValue, index, arr)	- Required. A function to be run for each element in the array.
Function arguments:
  - currentValue	- Required. The value of the current element
  - index	        - Optional. The array index of the current element
  - arr	          - Optional. The array object the current element belongs to
- thisValue	      - Optional. A value to be passed to the function to be used as its "this" value.
If this parameter is empty, the value "undefined" will be passed as its "this" value

**Return Value**:	A Boolean. Returns true if any of the elements in the array pass the test, otherwise it returns false

source: https://www.w3schools.com/jsref/jsref_some.asp

Examples: 

```js
let ages = [3, 10, 18, 20];

const checkAdult = (age) => {
  return age >= 18;
};

console.log(ages.some(checkAdult));

// outcome: true

```