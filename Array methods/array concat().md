join 2 or more arrays, return copy of joined arrays

The concat() method is used to concatenate (join) two or more arrays.

This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.

**Note**: The concat method does not recurse into nested array arguments.

#### Syntax
`array1.concat(array2, array3, ..., arrayX)`

Parameters

- `array2, array3, ..., arrayX` -	Required. The arrays to be joined

**Return Value**:	An Array object, representing the joined array

Examples:
```js
// concatenate 3 arrays:
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2, arr3);
// output: ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin']

// The concat method does not recurse into nested array arguments.
const arr1 = [1, 2, [3, 4]];
const arr2 = [[5, 6], 7, 8];
const arr3 = arr1.concat(arr2); 
// output:  [1, 2, [3, 4], [5, 6], 7, 8]

const arr = [[1,2], [3,4], [5,6]];
const result = [].concat(...arr);
console.log(result);    
//output: [ 1, 2, 3, 4, 5, 6 ]
```


source: https://www.w3schools.com/jsref/jsref_concat_array.asp