calls a function once for each element in an array, in order

**Note**: the function is not executed for array elements without values.

#### Syntax

`array.forEach(function(currentValue, index, arr), thisValue)`

Parameters:

- function(currentValue, index, arr)	- Required. A function to be run for each element in the array.
  - Function arguments:
    - currentValue	- Required. The value of the current element
    - index	   - Optional. The array index of the current element
    - arr	- Optional. The array object the current element belongs to
- thisValue	- Optional. A value to be passed to the function to be used as its "this" value.
If this parameter is empty, the value "undefined" will be passed as its "this" value

**Return Value**:	undefined

source: https://www.w3schools.com/jsref/jsref_foreach.asp