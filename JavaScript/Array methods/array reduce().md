The reduce() method reduces the array to a single value.

The reduce() method executes a provided function for each value of the array (from left-to-right).

The return value of the function is stored in an accumulator (result/total).

**Note**: reduce() does not execute the function for array elements without values.

**Note**: This method does not change the original array.

#### Syntax

`array.reduce(function(total, currentValue, currentIndex, arr), initialValue)`

Parameter Values

*function(total,currentValue, index,arr)*   - Required. A function to be run for each element in the array.
    - total         - Required. The initialValue, or the previously returned value of the function
    - currentValue  - Required. The value of the current element.
    - currentIndex  - Optional. The array index of the current element.
    - arr           - Optional. The array object the current element belongs to.

*initialValue*                            - Optional. A value to be passed to the function as the initial value.


**Return Value**:	Returns the accumulated result from the last call of the callback function.

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
  return arr.reduce((a,b) => a + b) / arr.length
}
console.log(average([1,2,3,4,5])); //output: 3
```
Count something
```js
const arr = [1,2,3,4,5];
//count odd number (because 1 % 2 is 1 and the Boolean of 1 equates to true)
console.log(arr.reduce((a,b) => a + (b % 2 ? 1 : 0), 0)); // output: 3
//count even number:
console.log(arr.reduce((a,b)=>a+(b%2?0:1),0)); // output: 2
```

source: https://www.w3schools.com/jsref/jsref_reduce.asp