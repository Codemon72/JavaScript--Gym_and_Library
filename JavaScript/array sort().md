sort the elements in an array

The sort() method sorts the items of an array.

The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

By **default**, the sort() method sorts the values as strings in alphabetical and ascending order.

This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce an incorrect result when sorting numbers.

You can fix this by providing a "compare function" (See "Parameter Values" below).

**Note**: This method changes the original array.

#### Syntax 

`array.sort(compareFunction)`

Parameters

- compareFunction	- Optional. A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
  - `function(a, b){return a-b}`  
When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

  Example:

  When comparing 40 and 100, the sort() method calls the compare function(40,100).

  The function calculates 40-100, and returns -60 (a negative value).

  The sort function will sort 40 as a value lower than 100.

**Return Value**:	The Array object, with the items sorted

More complex:
If we need to sort by two or more conditions, we need to spend more energy to write a proper comparison function. The following example has two sorting conditions, first according to the classification of odd and even order, and then follow the numbers in ascending order.

```
const arr=[1,2,3,4,5,6,100,999]
arr.sort((a, b) => {
  if (a%2 == b%2) return a-b;
  if (a%2 > b%2) return -1;
  return 1;
});
console.log(arr);

// output: [ 1, 3, 5, 999, 2, 4, 6, 100 ]
```

source: https://www.w3schools.com/jsref/jsref_sort.asp