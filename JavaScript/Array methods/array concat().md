join 2 or more arrays, return copy of joined arrays

The concat() method is used to join two or more arrays.

This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.

#### Syntax
`array1.concat(array2, array3, ..., arrayX)`

Parameters

- `array2, array3, ..., arrayX` -	Required. The arrays to be joined

**Return Value**:	An Array object, representing the joined array

Examples:
```js
const arr = [[1,2], [3,4], [5,6]];
const result = [].concat(...arr);
console.log(result);    
//output: [ 1, 2, 3, 4, 5, 6 ]


source: https://www.w3schools.com/jsref/jsref_concat_array.asp