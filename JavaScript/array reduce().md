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

source: https://www.w3schools.com/jsref/jsref_reduce.asp