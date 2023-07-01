sort the elements in an array

The sort() method sorts the items of an array.

The sort() overwrites the original array.

The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

By **default**, the sort() method (without a compare function) sorts the values as strings in alphabetical and ascending order.

This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce an incorrect result when sorting numbers.

You can fix this by providing a "compare function" (See "Parameter Values" below).

**Note**: This method changes the original array.

**Note**: The `sort()` function works by iterating through pairs of elements in the array. The pairs aren't always adjacent elements, and the choice of pairs can vary between different JavaScript engines (and even different runs in the same engine). It uses a complex sorting algorithm (commonly Timsort) that involves comparing and potentially swapping pairs of elements in a pattern determined by the algorithm to efficiently sort the array.

### Syntax 

`array.sort(compareFunction)`

### Parameters

- compareFunction	- **optional** - A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
  - `function(a, b){return a - b}`  
      When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

  Example:

  When comparing 40 and 100, the sort() method calls the compare function(40,100).
  The function calculates 40-100, and returns -60 (a negative value).
  The sort function will sort 40 as a value lower than 100.

**Return Value**:	The Array object, with the items sorted

source: https://www.w3schools.com/jsref/jsref_sort.asp

### Examples

```js
// return the sum of the 2 lowest numbers in an array
function sumTwoSmallestNumbers(numbers) {
  var [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}
```

More complex:
```js
// sort the array arr in a way that odd numbers come before even numbers while maintaining the original order within each parity group
const arr = [1, 2, 3, 4, 5, 6, 100, 999]

arr.sort((a, b) => {
  // Check if both numbers have the same parity (both odd or both even)
  if (a % 2 === b % 2) {
    // If they have the same parity, sort them in ascending order
    // by subtracting the second number from the first number
    return a - b;
  }

  // If the numbers have different parity, prioritize the odd number
  if (a % 2 > b % 2) {
    // If the first number is odd and the second number is even,
    // the odd number should come before the even number,
    // so return -1 to indicate that the first number should be sorted before the second number
    return -1;
  }

  // If the second number is odd and the first number is even,
  // the even number should come before the odd number,
  // so return 1 to indicate that the second number should be sorted before the first number
  return 1;
});


console.log(arr);

// output: [ 1, 3, 5, 999, 2, 4, 6, 100 ]
```
