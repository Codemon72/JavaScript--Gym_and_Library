The map() method creates a new array with the results of calling a function for every array element.

The map() method calls the provided function once for each element in an array, in order.

Note: map() does not execute the function for array elements without values.

Note: this method does not change the original array.

#### Syntax

`array.map(function(currentValue, index, arr), thisValue)`

**Parameter Values**

- function(currentValue, index, arr) - Required. A function to be run for each element in the array. Function arguments: 
  - currentValue    - Required. The value of the current element.
  - index           - Optional. The array index fo the current element.
  - arr             - Optional. The array object the current element belongs to.

- thisValue     - Optional. A value to be passed to the function to be used as its "this" value.
If this parameter is empty, the value "undefined" will be passed as its "this" value.

**Return Value**:	An Array containing the results of calling the provided function for each element in the original array.