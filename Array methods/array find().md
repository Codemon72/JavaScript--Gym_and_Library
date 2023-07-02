The `find()` method returns the value of the first element that passes a test.

The `find()` method executes a function for each array element.

The `find()` method returns undefined if no elements are found.

The `find()` method does not execute the function for empty elements.

The `find()` method does not change the original array.

### Syntax
`array.find(function(currentValue, index, arr),thisValue)`

### Parameters Description
`function()`	Required.
        A function to run for each array element.
`currentValue`	Required.
        The value of the current element.
`index`	Optional.
        The index of the current element.
`arr`	  Optional.
        The array of the current element.
`thisValue`	Optional. Default undefined.
        A value passed to the function as its this value.

### Return Value
The value of the first element that pass the test.
Otherwise it returns `undefined`.

### Examples
```js
// return the first number bigger than 18
const ages = [3, 10, 18, 20];

ages.find(age => age > 18)
```